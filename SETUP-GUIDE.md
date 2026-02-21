# 🚀 Quick Setup & Launch Guide

Get the Hotel & Restaurant Management Platform running in 5 minutes!

---

## Prerequisites Check

Before you begin, verify you have:
- ✅ Node.js v18+ installed
- ✅ npm (comes with Node.js)
- ✅ A modern web browser

**Check your Node version:**
```bash
node --version    # Should show v18.x or higher
npm --version     # Should show 8.x or higher
```

---

## Step 1️⃣: Install Dependencies (2 minutes)

### Backend Setup
```bash
cd RestaurantWeb       # Navigate to project root
cd server              # Go to server folder
npm install            # Install all dependencies
```

### Frontend Setup
```bash
cd ../client           # Go back to root, then to client
npm install            # Install all dependencies
```

✅ **Done with installation!**

---

## Step 2️⃣: Start the Servers (1 minute)

**Open TWO separate terminals/PowerShell windows:**

### Terminal 1 - Backend
```bash
cd D:\RestaurantWeb\server
npm start
```
You should see:
```
Server running on port 3000
Oracle DB pool initialized (or demo mode message)
```

### Terminal 2 - Frontend
```bash
cd D:\RestaurantWeb\client
npm run dev
```
You should see:
```
VITE v8.0.0-beta.15  ready in XXX ms
Local:   http://localhost:5173/
```

✅ **Both servers are running!**

---

## Step 3️⃣: Open in Browser (30 seconds)

**Go to:** `http://localhost:5173`

You should see the login page!

---

## Step 4️⃣: Login with Demo Credentials (30 seconds)

Choose one to login:

| Username | Password | Best For |
|----------|----------|----------|
| admin | admin | See full system |
| customer | customer | Test booking features |
| staff | staff | Test order management |
| manager | manager | Test staff operations |

✅ **You're in! Explore the platform.**

---

## 🎯 Common Actions After Login

### As **Admin**:
- Click "Analytics Dashboard" to see metrics
- Access "Inventory" to manage supplies
- View "Staff" management section

### As **Customer**:
- Browse "Hotels" - see available rooms
- Make a booking by selecting dates
- Browse "Menu" - check restaurant items
- Go to "Reservations" - book a table

### As **Staff**:
- View "Orders" - see pending orders
- Update order status
- Check order history

### As **Manager**:
- View all bookings
- Check staff schedule
- See operations dashboard

---

## ⚙️ Configuration (If Needed)

### Change Port Numbers

**Frontend on different port:**
```bash
cd client
npm run dev -- --port 5174
```

**Backend on different port:**
Edit `server/.env`:
```env
PORT=4000  # Change from 3000
```
Then restart: `npm start`

### Enable Real Database (Optional)

Edit `server/.env`:
```env
DB_HOST=localhost
DB_PORT=1521
DB_USER=system
DB_PASSWORD=Admin    # Your Oracle password
DB_SID=XE
```

Then run migration:
```bash
cd server
node runMigration.js
```

---

## 🔧 Troubleshooting Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 already in use | `taskkill /PID <pid> /F` or use `PORT=4000 npm start` |
| Port 5173 already in use | `npm run dev -- --port 5174` |
| "Cannot find module" | Run `npm install` again in that folder |
| Backend returns 500 errors | Check `server/` terminal for error messages |
| Login not working | Ensure both servers are running on correct ports |
| Blank page on frontend | Clear browser cache (Ctrl+Shift+Delete) |
| API calls failing | Check browser console (F12) for error details |

---

## 📁 File Structure Quick Reference

```
Your working files are here:
├── client/src/components/   ← Frontend React components
├── server/routes/           ← Backend API endpoints
├── server/.env              ← Database configuration
└── README.md                ← Detailed documentation
```

---

## 🧪 Test Features Quickly

### Test Login Works
1. Go to http://localhost:5173
2. Try any demo credential
3. Should see dashboard

### Test Backend API
```bash
# In PowerShell:
Invoke-WebRequest -Uri "http://localhost:3000/api/auth/login" `
  -Method POST `
  -Body '{"username":"admin","password":"admin"}' `
  -ContentType "application/json"
```

### Test Database (if configured)
```bash
# In server folder:
node runMigration.js
```

---

## 📊 Verify Everything is Working

### Checklist
- ✅ npm install completed for both client and server
- ✅ Backend running on http://localhost:3000
- ✅ Frontend running on http://localhost:5173
- ✅ Can login with demo credentials
- ✅ Dashboard loads without errors

**If all checked:** You're ready to use the platform! 🎉

---

## 🎓 Next Steps

1. **Explore Features**
   - Try booking a room
   - Place an order
   - Check analytics (as admin)

2. **Customize**
   - Edit components in `client/src/components/`
   - Modify API routes in `server/routes/`
   - Change styling in Material UI theme

3. **Setup Database** (for persistent data)
   - Install Oracle XE
   - Configure `.env` 
   - Run migration script
   - Restart servers

4. **Deploy** (when ready)
   - Build frontend: `npm run build`
   - Deploy to Vercel or Netlify
   - Deploy backend to Railway or Render

---

## 💡 Pro Tips

- **Hot reload**: Changes in code automatically reload (no restart needed)
- **Debug mode**: Open browser DevTools (F12) to see network requests
- **Mock data**: Never loses data during development (except on restart)
- **Switching roles**: Logout and login as different user to test features

---

## 📞 Quick Help

**"I don't see anything loading"**
→ Check if both terminals show no errors and correct ports

**"Login says 'Network error'"**
→ Make sure backend terminal shows "Server running on port 3000"

**"Things are loading but empty"**
→ This is demo mode - completely normal! Try uploading sample data

**"I want real database"**
→ Skip for now. Focus on exploring features first.

---

## ✨ You're All Set!

The platform is ready to explore. Open http://localhost:5173 and start using it!

**Questions?** Check the main [README.md](README.md) for detailed documentation.

---

**Happy managing!** 🚀
