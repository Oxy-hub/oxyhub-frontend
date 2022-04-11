import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import config from '../../../config';
import { setLoader } from '../../../store/actions';

const useOAuthPopup = () => {
  const initialMessageState = {
    token: null,
    state: null,
    error: null
  };
  const [externalPopupRef, setExternalPopupRef] = useState(null);
  const [message, setMessage] = useState(initialMessageState);
  const [openPopup, setOpenPopup] = useState(false);
  const dispatch = useDispatch();

  const postMessageHandler = e => {
    // Check if the postMessage event origin is what we expect it to be (for security reasons)
    if (e.origin === config.baseURL) {
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
      externalPopupRef.close();

      if (message.token && message.state) {
        console.log('Exchange token received successfully!');

        if (localOAuthState !== message.state) {
          throw new Error();
        }

        // Now start the backend code exchange process here and dispatch a loader
        dispatch(setLoader());
      } else if (message.error) {
        console.log('Some error occured. Display Error Toast');
        // Dispatch error message toast
      }
    } catch (e) {
      // dispatch error message toast
      console.log('State did not match. Possible hack?');
    }
  }, [message]);

  const openOAuthPopup = (url, target) => {
    setOpenPopup(true);
    const POPUP_WIDTH = 500;
    const POPUP_HEIGHT = 620;

    const left = window.screen.width / 2 - POPUP_WIDTH / 2;
    const top = window.screen.height / 2 - POPUP_HEIGHT / 2;

    const windowOpts = `toolbar=no, menubar=no, scrollbars=0, width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`;

    if (externalPopupRef === null || externalPopupRef.closed) {
      /** If a popup does not exist, or it has been closed, open a new popup */
      console.log('Here');
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
