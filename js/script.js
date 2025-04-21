 
// Booking Form Validation
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const busId = document.getElementById('busId').value;
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const seats = document.getElementById('seats').value;
  
    // Simple Validation
    if (name === '' || email === '' || busId === '' || source === '' || destination === '' || seats === '') {
      alert('All fields are required!');
      return;
    }
  
    if (isNaN(seats) || seats <= 0) {
      alert('Please enter a valid number of seats');
      return;
    }
  
    // Success Message
    alert('Booking Successful!');
  
    // Send SMS using Twilio (API call)
    sendSMS(name, email, busId, source, destination, seats);
  });
  
  // Function to send SMS using Twilio API
  function sendSMS(name, email, busId, source, destination, seats) {
    // Twilio credentials (replace with your actual account SID, token, and phone number)
    const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
    const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
    const fromPhone = 'YOUR_TWILIO_PHONE_NUMBER';
    const toPhone = 'USER_PHONE_NUMBER';  // User's phone number
  
    // Twilio API endpoint
    const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
  
    // SMS content
    const message = `Booking Confirmation:
    Name: ${name}
    Email: ${email}
    Bus ID: ${busId}
    Source: ${source}
    Destination: ${destination}
    Seats: ${seats}`;
  
    // Fetch API to make the POST request to Twilio API
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        To: toPhone,
        From: fromPhone,
        Body: message,
      }),
      auth: {
        username: accountSid,
        password: authToken,
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('SMS sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending SMS:', error);
    });
  }
  