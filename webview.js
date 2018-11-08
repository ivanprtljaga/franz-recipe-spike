const path = require('path');

module.exports = (Franz) => {
  const getMessages = () => {
    Franz.setBadge(
      document.querySelectorAll('.threaditem .thread:not(.nobadge)').length
    );
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
