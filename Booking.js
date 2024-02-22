// Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  destination: String,
  departureDate: String,
  arrivalDate: String,
  numberOfAdults: Number,
  // numberOfChildren: Number,
  additionalComments: String
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
