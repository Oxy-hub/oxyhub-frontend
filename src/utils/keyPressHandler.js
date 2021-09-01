const keyPressHandler = e => {
  if (!(e.key >= '0' && e.key <= '9')) e.preventDefault();
};

export default keyPressHandler;
