🧠 Mood Tracker API
-------------------

A simple TypeScript-based REST API that allows users to log their **daily mood** with optional notes. Built with Express, MongoDB, Mongoose, and input validation using Zod.

### 🚀 Features

*   ✅ Create and fetch users
    
*   ✅ Log daily mood with optional notes
    
*   ✅ Prevent duplicate mood entries for a day
    
*   ✅ Fetch full mood history for a user
    
*   ✅ Type-safe and schema-validated using Zod
    

### 🛠 Tech Stack

*   **Node.js** + **Express**
    
*   **TypeScript**
    
*   **MongoDB** + **Mongoose**
    
*   **Zod** for input validation
    
*   _(Optional)_ Docker for containerization
    

### 📦 Installation

`   clone https://github.com/yourusername/mood-tracker-api.git  cd mood-tracker-api  npm install   `

Make sure you have a local MongoDB instance running at:

`   mongodb://localhost:27017/mood_tracker   `

If not, update the URI in src/db.ts.

### 🚴‍♀️ Run Locally

`   npm run dev   `

Server runs at:

`   http://localhost:3000   `

### 🧪 API Endpoints

#### ✅ Health Check

`   GET /  → { "message": "Mood Tracker API is running!" }   `

#### 👤 Create User

`   POST /user  Content-Type: application/json  {    "name": "Alice",    "email": "alice@example.com"  }   `

#### 📋 Get All Users

`   httpCopyEditGET /users   `

#### 📈 Log Mood

`   POST /mood  Content-Type: application/json  {    "userId": "abc123",    "mood": 4,    "note": "Feeling productive!"  }   `

*   Only one mood entry allowed per user per day.
    

#### 📅 Get Mood History

`   GET /mood/:userId   `

Returns all mood entries for that user, sorted by date.

### ✅ Input Validation

Using [zod](https://github.com/colinhacks/zod) to ensure all incoming data is safe and structured. 400 errors are returned for any malformed input.

### 📚 Future Features (Ideas)

*   Mood heatmap or bar graph visualization (e.g., with Chart.js)
    
*   Daily average mood trends over time


