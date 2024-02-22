// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('./db');
const Booking = require('./Booking');

const app = express();

app.use(cors());
app.use(express.json());

// Create booking
app.post('/create-booking', async (req, res) => {
  try {
    const { name, email, phone, destination, departureDate, arrivalDate, numberOfAdults, additionalComments } = req.body;

    const newBooking = new Booking({
      name,
      email,
      phone,
      destination,
      departureDate,
      arrivalDate,
      numberOfAdults,
      additionalComments,
    });

    await newBooking.save();
    res.status(201).send(newBooking);
  } catch (error) {
    res.status(400).send(error);
  }
});


// Fetch all bookings
// In the server.js file
app.get('/get-bookings', async (req, res) => {
  try {
     const bookings = await Booking.find();
     console.log('Bookings:', bookings);
     res.status(200).send(bookings);
  } catch (error) {
     console.error('Error fetching bookings:', error);
     res.status(500).send(error);
  }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
