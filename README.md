
---

# 🎓 School User Data Application

A React-based test project that manages school user data with **admin** and **student** roles.
Admins can view and search students, while students can view their own details.

---

## 📂 Folder Structure

```
src/
 ├─ data/
 │   └─ users.js                # Static JSON user dataset
 ├─ components/
 │   ├─ LoginPage.jsx           # Login module with validation
 │   ├─ AdminDashboard.jsx      # Admin view: student list, search, details popup
 │   ├─ StudentDashboard.jsx    # Student view: personal details
 │   ├─ UserDetailsModal.jsx    # Popup for viewing detailed student info
 ├─ App.jsx                     # Main application router
 ├─ index.js                    # Entry point
```

---

## 📋 Project Description

### **Objective**

Create a user details application with different modules for **login**, **admin dashboard**, and **student dashboard** using React.

### **Dataset**

Static `users.js` file contains:

* **username** – Name of the user
* **userType** – `"admin"` or `"student"`
* **password** – Encrypted (Base64)
* **email** – Email ID
* **language** – English / German, etc.
* **address** – Address string
* **standard** – `"6th"` / `"7th"` / `"8th"` / `"9th"` / `"10th"`
* **subjects** – Array of subjects (e.g., Maths, Science, History)

---

## 📦 Modules

### 1️⃣ **Login Page**

* Users can log in using **email** and **password**.
* **Validations:**

  * Email format check
  * Password non-empty check
* On successful login:

  * **Admin** → Redirect to admin dashboard
  * **Student** → Redirect to student dashboard

### 2️⃣ **Admin Dashboard**

* Displays a list of all students:

  * Name
  * Email
  * Subjects
  * "View Details" button
* Features:

  * Search by **name** or **subject**
  * Modal popup to show detailed student info

### 3️⃣ **Student Dashboard**

* Displays logged-in student's details:

  * Name
  * Email
  * Language
  * Address
  * Standard
  * Subjects

---

## 🛠 Tech Stack

* **React** – Component-based UI
* **React Router DOM** – Page routing
* **CSS / Inline Styles** – UI styling
* **JavaScript (ES6)** – Logic and dataset handling

---

## ⚙️ Installation & Setup

1. **Clone Repository**

   ```bash
   git clone https://github.com/your-username/school-user-data-app.git
   cd school-user-data-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run Development Server**

   ```bash
   npm start
   ```

---

## 🧪 Test Credentials

Example credentials from `src/data/users.js` (password stored as Base64):

| Role    | Email                                       | Password (before encryption) |
| ------- | ------------------------------------------- | ---------------------------- |
| Admin   | [admin@test.com](mailto:admin@test.com)     | admin123                     |
| Student | [student@test.com](mailto:student@test.com) | student123                   |

---

## 📌 Notes

* Password is stored in **Base64** format for simplicity; this is **not secure for production**.
* Dataset is **static**; no backend or database is used.

---

<img width="1920" height="1080" alt="Screenshot (249)" src="https://github.com/user-attachments/assets/26ce42ae-263f-43fc-b27c-baeabb132d8c" />



<img width="1920" height="1080" alt="Screenshot (250)" src="https://github.com/user-attachments/assets/a076a749-4e3e-43b7-a3ea-8407f1da666b" />


<img width="1920" height="1080" alt="Screenshot (248)" src="https://github.com/user-attachments/assets/e7e5c9c3-f1fa-49bd-a97f-37b6e652ec87" />

