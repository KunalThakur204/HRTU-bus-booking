# 🚌 HRTU Bus Booking System

A simple and functional **frontend-based bus booking system** built for **Himachal Road Transport University (HRTU)**. This web app allows users (students and staff) to book tickets, view detailed route charts, and manage bookings — all within the browser using **localStorage**. It is designed to be mobile-friendly, responsive, and future-ready with API integrations.

---

## 🔧 Features

- 📋 View a list of all available bus routes
- 📝 Book tickets via a user-friendly form with live validation
- 💾 Store, view, edit, and delete bookings using local storage
- 📲 (Future) Send booking confirmation via Twilio SMS API
- 🎨 Clean UI with responsive design
- 📊 Complete bus chart with departure, via stops, fare, and distance

---

## 🚀 Technologies Used

| Layer       | Technologies                                      |
|-------------|---------------------------------------------------|
| Frontend    | HTML5, CSS3, JavaScript                           |
| Storage     | localStorage (Browser-Based)                      |
| APIs        | Twilio API (for SMS Notification - optional)      |
| Utilities   | Fetch API, URLSearchParams                        |

---

## 📅 Bus Route Chart & Timetable

Each route includes:

- ✅ Bus Number
- ✅ Source & Destination
- ✅ Departure Time
- ✅ Intermediate Stops (Via)
- ✅ Total Distance (in KM)
- ✅ Fare (₹)

These routes are defined inside `booking.js` in a JavaScript object/array structure and are rendered dynamically on the Booking page.

---

## 📂 Project Structure
hrtu-bus-booking/ ├── index.html # Landing Page ├── booking.html # Ticket Booking Page ├── js/ │ └── booking.js # All CRUD logic, localStorage handling, routes ├── css/ │ └── style.css # Custom styles ├── images/ │ └── logo.png # HRTU Logo └── README.md # Project Readme (You're here!)

yaml
Copy
Edit

---

## ⚙️ How It Works

1. **View Routes:** Browse all available HRTU buses with complete travel info.
2. **Book Tickets:** Fill in your name, route, and number of seats to confirm.
3. **Store Booking:** Ticket info is stored locally in your browser.
4. **Manage Bookings:** You can **Edit** or **Delete** bookings on the fly.
5. **SMS Ready:** With a valid Twilio SID & Token, the app can send SMS confirmations (code prepared, just plug and play).

---

## 🧠 Future Enhancements

- 🔐 Backend Integration using Node.js + MongoDB or SQL
- 💳 Payment Gateway (Razorpay/Paytm Integration)
- 🧑‍💼 Admin Dashboard to view & manage all bookings
- 📧 Email Notifications (SendGrid/Mailgun)
- 📍 Live Tracking Integration via GPS APIs
- 📱 PWA: Make it installable on mobile devices

---

## 📸 Screenshots

> Replace the placeholders below with real screenshots from your project:

| Booking Form | Booking List (LocalStorage) | Route Chart |
|--------------|------------------------------|-------------|
| ![Form](screenshots/form.png) | ![List](screenshots/bookings.png) | ![Route](screenshots/routes.png) |

---

## 🔄 How to Run Locally

    git clone https://github.com/your-username/hrtu-bus-booking.git
    cd hrtu-bus-booking

# Open index.html in your browser
✅ No backend setup required. Works right in your browser.

##🤝 Contributions

Contributions, feature ideas, and bug reports are welcome!

Fork the project

Create a new branch (git checkout -b feature/your-feature)

Commit your changes

Open a Pull Request ✅

##📜 License

This project is licensed under the MIT License.

✨ Author
Developed by: Kunal Thakur
🎓 Project Year: 2025
🛡️ All Rights Reserved — HRTU Transport
















