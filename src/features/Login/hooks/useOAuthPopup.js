import { useEffect, useState } from 'react';
import config from '../../../config';

const useOAuthPopup = ({ onSuccess, onError, onStateCheckError }) => {
  const initialMessageState = {
    token: null,
    state: null,
    error: null
  };
  const [externalPopupRef, setExternalPopupRef] = useState(null);
  const [message, setMessage] = useState(initialMessageState);
  const [openPopup, setOpenPopup] = useState(false);
  const [oAuthprovider, setOAuthProvider] = useState(null);

  const postMessageHandler = e => {
    // Check if the postMessage event origin is what we expect it to be (for security reasons)
    if (e.origin === config.apiBaseUrl) {
      // If the message data contains token, then update local React state with the token and OAuth 'state'
      if (e.data.token)
        setMessage({ token: e.data.token, state: e.data.state });
      // Otherwise set an error
      else if (e.data.error) setMessage({ error: e.data.error });
    }
  };

  // Add an event listener for postMessage whenever popup is opened
  useEffect(() => {
    let intervalRef = null;
    if (openPopup) {
      console.log('Setting the event listener and the interval');
      window.addEventListener('message', postMessageHandler);
      intervalRef = setInterval(() => {
        console.log('Checking...');
        if (externalPopupRef.closed) {
          console.log('Popup has been closed!');
          setOpenPopup(false);
        }
      }, [500]);
      console.log('Interval has been created with ref : ', intervalRef);
    }

    return () => {
      console.log(
        'Removing message event handler and interval...',
        intervalRef
      );
      window.removeEventListener('message', postMessageHandler);
      clearInterval(intervalRef);
    };
  }, [openPopup]);

  // Perform further tasks when token has been received
  useEffect(() => {
    try {
      const localOAuthState = localStorage.getItem('__oAuth_state__');
      localStorage.removeItem('__oAuth_state__');

      if (message.token && message.state) {
        externalPopupRef.close();
        if (localOAuthState !== message.state) {
          throw new Error();
        }
        onSuccess(message.token, oAuthprovider.toLowerCase());
      } else if (message.error) {
        externalPopupRef.close();
        onError();
      }
    } catch (e) {
      console.log(e);
      onStateCheckError();
    }
  }, [message]);

  const openOAuthPopup = (url, target, provider) => {
    setOpenPopup(true);
    setOAuthProvider(provider);
    const POPUP_WIDTH = 500;
    const POPUP_HEIGHT = 620;

    const left = window.screen.width / 2 - POPUP_WIDTH / 2;
    const top = window.screen.height / 2 - POPUP_HEIGHT / 2;

    const windowOpts = `toolbar=no, menubar=no, scrollbars=0, width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`;

    if (externalPopupRef === null || externalPopupRef.closed) {
      /** If a popup does not exist, or it has been closed, open a new popup */
      const ref = window.open(url, target, windowOpts);
      setExternalPopupRef(ref);
    } else if (externalPopupRef) {
      /** If a popup exists, replace the current popup with the new URL, and bring it to the foreground */
      externalPopupRef.location.replace(url);
      externalPopupRef.focus();
    }
  };

  return { openOAuthPopup };
};

export default useOAuthPopup;
