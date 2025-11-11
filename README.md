


# 🔐 React Account Manager (Auth Flow)

A modern, minimal authentication flow built with **React 19**, **Bootstrap 5**, **React Hook Form**, **React Router v7**, and **React Toastify**.  
This project demonstrates clean state management, form validation, and navigation for user login, registration, and profile management — all using **localStorage** as a mock backend.

---

## 🧭 Features

✅ User Registration with Validation  
✅ Login Authentication using LocalStorage  
✅ Protected Profile Route  
✅ Update User Info (Name, Password)  
✅ Logout with State Reset  
✅ Bootstrap 5 Responsive UI  
✅ Toast Notifications (React Toastify)

---

## ⚙️ Tech Stack

| Tool | Purpose |
|------|----------|
| **React 19** | Core UI Library |
| **Vite** | Lightning-fast build tool |
| **Bootstrap 5.3** | UI styling & grid system |
| **React Router 7.9** | Routing and navigation |
| **React Hook Form 7.66** | Form management & validation |
| **React Toastify 11** | Modern notification system |
| **LocalStorage API** | Mock backend for user persistence |

---

## 📁 Folder Structure


```
src/
├── components/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── App.jsx
├── main.jsx
└── index.css

```

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/react-auth-flow.git
cd react-auth-flow
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

Then open `http://localhost:5173/` 

---

## 🧩 Pages Overview

### 🔑 **Login Page**

* Validates user credentials from `localStorage`.
* Redirects to Profile on success.
* Toast notifications for success/error.
* Link for new users → “Register here”.

### 📝 **Register Page**

* Saves new users to `localStorage`.
* If user already exists → redirects to Login.
* Success toast + redirect after registration.

### 👤 **Profile Page**

* Displays logged-in user info.
* Allows update of name/password.
* Logout clears session and redirects to Login.

### 🧱 **ProtectedRoute**

* Blocks unauthorized access to `/profile`.
* Redirects to `/` if user is not logged in.

---

## 🧠 How It Works

1. **Registration**
   User info is stored in `localStorage` with email as key.

2. **Login**
   Credentials are validated against stored data.
   On success → `loggedInUser` key is stored in `localStorage`.

3. **AuthContext**
   Loads user data globally based on `loggedInUser`.

4. **Profile**
   Displays & updates user data; logout removes `loggedInUser`.

---
