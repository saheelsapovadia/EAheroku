const mongoose = require('mongoose');

const ContactUsSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Content: {
    type: String,
    required: true,
  },
});

module.exports = ContactUs = mongoose.model('ContactUs', ContactUsSchema);
