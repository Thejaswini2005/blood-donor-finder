# 🩸 Blood Donor Finder

A full-stack MERN application that connects blood donors with recipients. Users can register, become donors, search for nearby donors, send blood requests, and manage donation requests through a secure authentication system.

## 🚀 Live Demo

- **Frontend:** https://blooddonarfinder.netlify.app
- **Backend:** https://blood-donor-finder-30tm.onrender.com
- **GitHub:** https://github.com/Thejaswini2005/blood-donor-finder

---

## 📌 Features

### Authentication
- User Registration
- User Login & Logout
- JWT Authentication
- Secure Cookies

### Donor Management
- Become a Donor
- Edit Donor Profile
- View Profile

### Find Donors
- Search by Blood Group
- Search by City
- Search by State
- View Donor Details

### Blood Requests
- Send Blood Request
- View My Requests
- View Donor Requests
- Accept Request
- Reject Request
- Mark Donation as Completed

### Dashboard
- Blood Group
- My Requests
- My City
- Last Donation Date

### UI
- Responsive Design
- Toast Notifications
- Modern Dashboard
- Clean User Interface

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router DOM
- React Icons
- React Toastify
- CSS3

### Backend
- Node.js
- Express.js
- JWT
- bcryptjs
- Cookie Parser
- CORS

### Database
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Netlify
- Backend: Render

---

## 📂 Project Structure

```
blood-donor-finder/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── DB/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routers/
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── Pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── assets/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Thejaswini2005/blood-donor-finder.git
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Endpoints

### Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| POST | /api/auth/logout |

### Donor

| Method | Endpoint |
|---------|----------|
| POST | /api/donor |
| GET | /api/donor |
| GET | /api/donor/my-profile |
| PUT | /api/donor/update |
| DELETE | /api/donor/delete |

### Blood Requests

| Method | Endpoint |
|---------|----------|
| POST | /api/request |
| GET | /api/request/my |
| GET | /api/request/donor |
| PUT | /api/request/:id/status |
| DELETE | /api/request/:id |

---

## 🔄 Workflow

```
User Login
      │
      ▼
Become Donor
      │
      ▼
Find Donors
      │
      ▼
Select Donor
      │
      ▼
Request Blood
      │
      ▼
Selected Donor Receives Request
      │
      ▼
Accept / Reject
      │
      ▼
Completed Donation
```

---

## 📸 Screenshots

Add screenshots of:

- Home Page
- Login
- Dashboard
- Find Donors
- Request Blood
- My Requests
- Donor Requests
- Profile

---

## 👩‍💻 Author

**Thejaswini Gangavaram**

- GitHub: https://github.com/Thejaswini2005
- LinkedIn: *(Add your LinkedIn profile URL here)*

---

## ⭐ If you like this project

Please consider giving it a ⭐ on GitHub!
