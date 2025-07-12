# 👥 Employee Directory Web Interface

A modern and responsive web application built to manage employee records with ease. This single-page application allows you to create, edit, delete, filter, sort, search, and paginate employee data — all from the browser, without a backend.

---

## 📁 Project Structure
```
Employee-Management/
├── client/
│ ├── pages/
│ ├── App.jsx
│ ├── styles.css
├── public/
│ ├── placeholder.svg
│ ├── robots.txt
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
- Browse employees in a card-based layout
- Edit or delete records using intuitive buttons
- Clean and responsive design

### 🧾 Add & Edit Functionality
- Add new employee records via a modal form
- Pre-filled data for editing
- Cancel button to discard unsaved changes

### 🔍 Search, Filter & Sort
- Real-time search by name or email
- Filter by department, role, or name
- Sort options: First Name and Department
- Combined search + filter for refined results

### 📄 Pagination Controls
- Selectable items per page (10 / 25 / 50 / 100)
- Navigation with dynamic rendering
- Responsive pagination that adapts to filtered data

### 📱 Fully Responsive UI
- Mobile-friendly design with flexible layouts
- Built with media queries and component scaling

### 💾 No Backend Required
- Uses in-memory static data (`employee.js`)
- Perfect for demos or internal tools

---

## 🛠️ Tech Stack

| Tech            | Purpose                             |
|-----------------|-------------------------------------|
| **React.js**    | UI building and dynamic rendering   |
| **Vite**        | Fast dev server & build tool        |
| **JavaScript**  | App logic & state management        |
| **CSS**         | Styling and responsive layout       |
| **HTML5**       | Semantic markup                     |
| **SVG**         | Placeholder assets                  |

---

## 📸 Screenshots

![Screenshot 1](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121717.png?raw=true)
![Screenshot 2](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121731.png?raw=true)
![Screenshot 3](https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface/blob/main/Screenshot%202025-07-12%20121740.png?raw=true)

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository

```
git clone https://github.com/dibyaranajnsahoo1/Employee-Directory-Web-Interface.git
2️⃣ Navigate to the Project Directory
cd employee-management
3️⃣ Install Dependencies
npm install
4️⃣ Start the Development Server
npm run dev
📌 Project Insights
State is managed entirely on the client side using React hooks

No database or external API is used

Filter, sort, and pagination are implemented with pure JavaScript logic

Clean and reusable component architecture

Minimal and accessible design for better usability

🔮 Future Improvements
Persistent storage (e.g., localStorage or backend integration)

Toast notifications or modals for user actions

Better animations and transitions

Advanced filtering (e.g., multi-field, date range)

Unit testing with Jest or Vitest

Backend support using Express.js + MongoDB

✅ Project Highlights
🔄 Full CRUD functionality

🔍 Advanced search, filter, and sort logic

📱 100% responsive on all screen sizes

🧼 Neatly organized and readable codebase

⚡ Built using cutting-edge tooling (Vite + React)

👨‍💻 Author
Developed with 💙 by Dibya
GitHub: https://github.com/dibyaranajnsahoo1

📝 License
This project is open-source and available under the MIT License.


---

Let me know if you'd like to:
- Replace `yourusername` with your GitHub username or custom repo URL
- Add preview screenshots or deploy link (like from Vercel)
- Add badges (like build status, license, etc.)

I'm here to help polish it more if needed!
