import { useEffect, useState } from 'react';
import config from '../../../config';

const useOAuthPopup = () => {
  const [externalPopupRef, setExternalPopupRef] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  const [message, setMessage] = useState({
    token: null,
    state: null,
    error: null
  });
  const [openPopup, setOpenPopup] = useState(false);

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
    if (openPopup) {
      console.log('Setting the event listener');
      window.addEventListener('message', postMessageHandler);
    }

    return () => {
      console.log('Removing message event handler');
      window.removeEventListener('message', postMessageHandler);
    };
  }, [openPopup]);

  // Perform further tasks when token has been received
  useEffect(() => {
    try {
      const localOAuthState = localStorage.getItem('__oAuth_state__');
      localStorage.removeItem('__oAuth_state__');

      if (message.token && message.state) {
        console.log('Exchange token received successfully!');
        externalPopupRef.close();

        if (localOAuthState !== message.state) {
          throw new Error();
        }

        // Now start the backend code exchange process here and dispatch a loader
      } else if (message.error) {
        console.log('Some error occured');
        externalPopupRef.close();
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

    const windowOpts = `toolbar=no, menubar=no, scrollbar=0, width=${POPUP_WIDTH}, height=${POPUP_HEIGHT}, left=${left}, top=${top}`;

    if (externalPopupRef === null || externalPopupRef.closed) {
      /* if the pointer to the window object in memory does not exist
      or if such pointer exists but the window was closed */
      const ref = window.open(url, target, windowOpts);
      setExternalPopupRef(ref);
    } else if (prevUrl !== url) {
      /* if the resource to load is different,
      then we load it in the already opened secondary window and then
      we bring such window back on top/in front of its parent window. */
      externalPopupRef.close();
      const ref = window.open(url, target, windowOpts);
      setExternalPopupRef(ref);
    } else {
      /* else the window reference must exist and the window
      is not closed; therefore, we can bring it back on top of any other
      window with the focus() method. There would be no need to re-create
      the window or to reload the referenced resource. */
      externalPopupRef.focus();
    }

    setPrevUrl(url);
  };

  return { openOAuthPopup };
};

export default useOAuthPopup;
