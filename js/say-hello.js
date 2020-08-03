const $ = require('jquery');

// create a function with a nice message
const niceMessage = () => {
    $('#message').html(`Hello World! I am a nice message.`);
};

// export { niceMessage as default };
module.exports = niceMessage;