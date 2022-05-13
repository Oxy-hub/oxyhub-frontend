import { useEffect } from 'react';

const useBrodcastChannel = (name, onMessage = () => {}) => {
  const channel = new BroadcastChannel(name);

  useEffect(() => {
    channel.onmessage = onMessage;
  }, []);

  const postMessage = params => {
    channel.postMessage(params);
  };

  return { postMessage };
};

export default useBrodcastChannel;
