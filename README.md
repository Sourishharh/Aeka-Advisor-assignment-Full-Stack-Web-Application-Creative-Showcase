# 🎨 Creative Showcase  
**A Full Stack Web Application (Frontend Implementation)**

Creative Showcase is a responsive web application that allows artists to upload, manage, and showcase their digital artwork or memories.  
This project was developed as part of the **Aeka Advisor Assignment** using **HTML, CSS, and JavaScript**.

---

## 🌐 Live Demo
🔗 https://creative-showcase1.netlify.app/

---

## 🚀 Key Features

- 🔐 User Authentication (Sign Up & Login)
- 👤 Private User Dashboard
- 🖼️ Image Upload & Display
- 📌 Masonry / Mosaic Image Layout
- 🌍 Public User Profile Pages
- 🎨 Interactive & Animated UI
- 👁️ Show / Hide Password Feature
- 🌙 Dark Mode Support
- 📱 Fully Responsive Design
- 💾 Client-side Data Persistence using LocalStorage

---

## 📑 Pages Overview

### 1. Landing Page
- Displays a mosaic layout of uploaded images
- Login and Sign Up navigation options
- Publicly accessible gallery

### 2. Sign Up Page
- New user registration
- Password visibility toggle
- Interactive form validation

### 3. Login Page
- Secure user authentication
- Animated UI feedback
- Redirects to dashboard on success

### 4. User Dashboard (Private)
- Accessible only after login
- Image upload functionality
- Displays user's uploaded images
- Logout option

### 5. Public User Profile
- Accessible via URL parameter (`/profile?user=username`)
- Shows user-specific uploaded images in a masonry layout

---

## 🛠️ Technologies Used

- **HTML5** – Structure and semantic markup
- **CSS3** – Styling, animations, responsive design
- **JavaScript (Vanilla)** – Logic and interactivity
- **LocalStorage** – Authentication and data persistence
- **Netlify** – Hosting and deployment
- **Git & GitHub** – Version control

---

## 📂 Project Structure

```text
Full-Stack-Web-Application-Creative-Showcase/
│
├── index.html            # Landing page (public gallery)
├── login.html            # Login page
├── signup.html           # Sign up page
├── dashboard.html        # Private user dashboard
├── profile.html          # Public user profile
│
├── css/
│   └── style.css         # Global styles & UI animations
│
├── js/
│   ├── auth.js           # Authentication logic
│   ├── login-ui.js       # Login & signup UI interactions
│   ├── upload.js         # Image upload & dashboard logic
│   ├── gallery.js        # Public gallery rendering
│   ├── interaction.js   # UI interactions (likes, modals)
│   └── theme.js          # Dark / light mode toggle
│
└── README.md             # Project documentation
```

