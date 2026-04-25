# Health Vault Plus

Health Vault Plus is a pre-authorization intelligence platform that simplifies claim document validation to prevent shortfalls and coverage gaps.

This repository is organized as a monorepo containing two decoupled services:
- **Frontend**: A React application powered by Vite.
- **Backend**: An Express & Node.js application secured with Helmet, rate-limiter, and NoSQL sanitization connected to MongoDB.

---

## Environment Setup
To run the project locally, create two `.env` files in their respective directories.

### Backend (`/backend/.env`)
```
PORT=5000
MONGO_URI=your-mongodb-atlas-string
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-app-password
CLIENT_URL=http://localhost:5173
```

### Frontend (`/frontend/.env`)
```
VITE_API_URL=http://localhost:5000
```

---

## Running Locally

Run both servers locally in separate terminal windows.

**Start the Backend:**
```bash
cd backend
npm install
npm run dev
```

**Start the Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

## Production Deployment Guide

The optimal path to hosting this stack without serverless complications is deploying the Frontend statically to Vercel, and the Node Backend as a continuous service on Render.

### 1. Deploy the Backend (to Render)
1. Go to [Render.com](https://render.com/) and click **New +** -> **Web Service**.
2. Select your `health-vault-plus` GitHub repository.
3. Configure the following build settings:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Expand **Advanced** and add your **Environment Variables**:
   - `MONGO_URI`, `EMAIL_USER`, `EMAIL_PASS`
   - Set `CLIENT_URL` placeholder for now (we'll update this shortly).
5. **Deploy!** Once live, copy your new secure Render URL (e.g. `https://health-backend.onrender.com`).

### 2. Deploy the Frontend (to Vercel)
1. Go to [Vercel.com](https://vercel.com/) and click **Add New** -> **Project**.
2. Select your `health-vault-plus` GitHub repository.
3. Configure the build settings:
   - **Root Directory**: Click "Edit" and select the `frontend` folder.
   - Vercel will automatically detect `Vite`.
4. Add your **Environment Variables**:
   - `VITE_API_URL` = (Paste your Render Backend URL here — no trailing slash).
5. **Deploy!** Once finished, copy your Vercel URL.

### 3. Connect the Two Securely
Currently, your strict backend security prevents unauthorized domains. Let's whitelist Vercel.
1. Return to your Render dashboard for the Backend.
2. Edit your `CLIENT_URL` variable to include your Vercel frontend URL, as well as any custom domain name you own.
   - `CLIENT_URL = https://your-vercel.vercel.app,https://your-custom-godaddy.com`
3. Save the changes to restart the server.

Your frontend and backend will now securely talk to each other in production!
