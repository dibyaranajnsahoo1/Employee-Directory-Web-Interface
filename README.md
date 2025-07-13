# 👥 Employee Directory Web Interface

A modern and responsive web application built to manage employee records with ease. This single-page application allows you to create, edit, delete, filter, sort, search, and paginate employee data — all from the browser, without a backend.

---

## 📁 Project Structure
```
Employee-Management/
├── client/
│ ├── pages/
│       ├── index.jsx
│       ├── Notfound.jsx
│ ├── App.jsx
│ ├── styles.css
├── public/
│ ├── placeholder.svg
├── shared/
│ ├── employee.js
├── index.html
├── .dockerignore
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
├── vite.config.js
```
- `client/pages/`: Components for different views (index.js, Notfound.js).
- `public/`: Static assets (icons, images, metadata files).
- `shared/employee.js`: JavaScript array simulating employee data.
- `App.jsx`: Main application logic and rendering.
- `styles.css`: Centralized styling for layout and components.
- `index.html`: Entry point for the application.

---
---

## ✨ Key Features

### 🔹 Employee Dashboard
- View all employees in a clean card-based layout
- Edit and delete records with intuitive controls

### 🧾 Add & Edit Functionality
- Add new employee records via modal
- Pre-filled data for editing
- Cancel resets form and closes modal

### ✅ Form Validation
- Required field checks (first name, email, department, role)
- Email format validation

### 💾 Persistent Storage
- Data saved in `localStorage`
- Automatically restores previous session data

### 🔍 Search, Filter & Sort
- Real-time search by name or email
- Filter by department, role, or name
- Sort by First Name or Department
- Combined search + filter for refined results

### 📄 Pagination Controls
- Dynamic items per page (10 / 25 / 50 / 100)
- Next / Previous page navigation
- Pagination adapts to search/filter results

### 📱 Fully Responsive UI
- Mobile-friendly layout with component scaling
- Optimized for all screen sizes

---

## 🛠️ Tech Stack

| Tech            | Purpose                             |
|-----------------|-------------------------------------|
| **React.js**    | UI and state management             |
| **Vite**        | Lightning-fast development build    |
| **JavaScript**  | Logic and functionality             |
| **CSS**         | Styling and responsive design       |
| **HTML5**       | Semantic layout                     |
| **SVG**         | Placeholder and icons               |

---

## 📸 Screenshots
![Screenshot 3](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121717.png)
![Screenshot 1](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121740.png)
![Screenshot 2](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121731.png)

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface.git
2️⃣ Navigate to the Project Directory
cd Employee-Directory-Web-Interface
3️⃣ Install Dependencies
npm install
4️⃣ Start the Development Server
npm run dev
Open http://localhost:5173 in your browser.

📌 Project Insights
State is managed fully via React hooks (useState, useMemo, useEffect)

No backend/database required – uses static in-memory data and browser storage

Validation logic for required fields and email format

Filter, search, sort, pagination – all powered by native JS

Component logic and UI cleanly organized and maintainable

🔮 Future Improvements
🌐 Backend integration using Express.js + MongoDB

🧪 Unit testing with Jest or Vitest

🚀 Deployment on Vercel or Netlify

✨ Animation using Framer Motion or CSS transitions

🔔 Toast notifications on action feedback

✅ Project Highlights
🔄 Full CRUD (Create, Read, Update, Delete)

🔍 Real-time search, advanced filter, and sorting

💾 Persistent localStorage-backed data saving

🧼 Minimal, clean, and readable codebase

⚡ Powered by modern tools: React + Vite

📱 100% responsive for all devices

🧼 Neatly organized and readable codebase

⚡ Built using cutting-edge tooling (Vite + React)

👨‍💻 Author
Developed with 💙 by Dibya
GitHub: https://github.com/dibyaranajnsahoo1


I'm here to help polish it more if needed!
