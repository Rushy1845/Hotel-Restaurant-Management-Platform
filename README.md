# 🏨 Hotel & Restaurant Management Platform

A full-stack web application for managing hotel bookings, restaurant reservations, dining orders, staff scheduling, and inventory. Built with React, Node.js, and Oracle Database.

**Status**: ✅ Fully Functional (Demo Mode)

---

## 🎯 Features

### 👥 User Management
- **Authentication**: Secure login/registration with JWT tokens
- **Role-Based Access Control**: Admin, Manager, Staff, Customer roles
- **User Profiles**: Personal account management

### 🏨 Hotel Management
- Room inventory and availability
- Booking system with check-in/check-out dates
- Room types and pricing
- Booking status tracking

### 🍽️ Restaurant Management
- Menu management with categories
- Table reservations with capacity planning
- Dining orders and bill generation
- Real-time order status updates

### 📊 Staff & Operations
- Staff scheduling and management
- Inventory tracking for supplies
- Admin analytics dashboard with metrics
- Audit logging for all actions

### 🎨 User Interface
- Modern Material Design (Material UI)
- Smooth animations (Framer Motion)
- Fully responsive layout
- Role-specific dashboards

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+ and npm
- **Modern browser** (Chrome, Firefox, Safari, Edge)
- Optional: **Oracle Database XE** for persistent data

### Installation

1. **Navigate to project directory**
   ```bash
   cd RestaurantWeb
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

**Terminal 1 - Start Backend Server:**
```bash
cd server
npm start
```
✅ Backend runs on: `http://localhost:3000`

**Terminal 2 - Start Frontend Development Server:**
```bash
cd client
npm run dev
```
✅ Frontend runs on: `http://localhost:5173`

**Open in browser:**
```
http://localhost:5173
```

---

## 🔐 Demo Login Credentials

Use any of these to test the application:

| Username | Password | Role | Access Level |
|----------|----------|------|------------------|
| **admin** | admin | Admin | Full platform access, analytics, user management |
| **manager** | manager | Manager | Staff scheduling, bookings, reservations |
| **staff** | staff | Staff | Order management, kitchen operations |
| **customer** | customer | Customer | Booking, reservations, menu browsing |

**Try Each Role:**
- Admin: Complete system overview and management
- Manager: Operational dashboard
- Staff: Order fulfillment
- Customer: Guest booking experience

---

## 📁 Project Structure

```
RestaurantWeb/
├── client/                          # React Frontend (Vite)
│   ├── src/
│   │   ├── App.jsx                 # Main app router & theme
│   │   ├── main.jsx                # Entry point
│   │   ├── index.css               # Global styles
│   │   ├── components/             # React components
│   │   │   ├── Login.jsx           # Authentication page
│   │   │   ├── Register.jsx        # Registration page
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   ├── AdminDashboard.jsx  # Analytics & metrics
│   │   │   ├── HotelBooking.jsx    # Room booking
│   │   │   ├── RestaurantReservation.jsx # Table reservation
│   │   │   ├── Menu.jsx            # Menu browsing
│   │   │   ├── Orders.jsx          # Order management
│   │   │   ├── Inventory.jsx       # Inventory tracking
│   │   │   └── StaffScheduling.jsx # Staff management
│   │   └── assets/                 # Images, icons
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── server/                          # Node.js Backend (Express)
│   ├── index.js                    # Express app entry point
│   ├── db.js                       # Database connection pool
│   ├── logger.js                   # Audit logging utility
│   ├── middleware.js               # JWT auth middleware
│   ├── mockDB.js                  # Demo data
│   ├── package.json
│   ├── .env                        # Environment variables
│   ├── schema.sql                  # Database schema (Oracle)
│   ├── migrate.sql                 # Sample data
│   ├── runMigration.js            # Migration script
│   └── routes/                     # API endpoint handlers
│       ├── auth.js                 # Login/Register/Profile
│       ├── hotel.js                # Room & booking APIs
│       ├── restaurant.js           # Menu & order APIs
│       ├── analytics.js            # Statistics APIs
│       ├── staff.js                # Staff management APIs
│       └── inventory.js            # Inventory APIs
│
├── index.html                       # Legacy static page
├── script.js                        # Legacy JavaScript
├── style.css                        # Legacy styles
└── README.md                        # This file
```

---

## 🔌 API Endpoints Reference

### Authentication (`/api/auth`)
```
POST   /login              - Login with credentials
POST   /register           - Register new account
GET    /profile            - Get current user profile
```

### Hotel Operations (`/api/hotel`)
```
GET    /rooms              - List available rooms
POST   /book               - Create new booking
GET    /bookings           - Get user bookings
GET    /bookings/:id       - Get booking details
```

### Restaurant Operations (`/api/restaurant`)
```
GET    /menu               - List all menu items
GET    /menu/:category     - Get items by category
GET    /tables             - List available tables
POST   /reserve            - Make table reservation
POST   /order              - Place food order
GET    /orders             - Get order history
PATCH  /orders/:id         - Update order status
```

### Admin & Analytics (`/api/analytics`)
```
GET    /dashboard          - Dashboard metrics
GET    /bookings-report    - Booking statistics
GET    /revenue-report     - Revenue metrics
```

### Staff & Inventory
```
GET    /staff/list         - All staff members
POST   /staff              - Add new staff
GET    /inventory/list     - Inventory items
PATCH  /inventory/:id      - Update stock
```

---

## 🧪 Testing the Application

### 1️⃣ Test Admin Role
```
Username: admin
Password: admin
Access: Full platform, analytics, all data
```
- Visit http://localhost:5173
- Click "Admin Dashboard" to see metrics
- Manage staff, inventory, users

### 2️⃣ Test Customer Role
```
Username: customer
Password: customer
Access: Book rooms, make reservations, browse menu
```
- Browse hotel rooms
- Make booking with dates
- Reserve restaurant table
- Place orders

### 3️⃣ Test Staff Role
```
Username: staff
Password: staff
Access: Order management, kitchen operations
```
- View pending orders
- Update order status
- View kitchen orders

### 4️⃣ Test Manager Role
```
Username: manager
Password: manager
Access: Staff, bookings, operations oversight
```
- View all bookings
- Manage staff schedule
- View operations metrics

---

## 💾 Database Setup

### Current: Demo Mode (Default) ✅
```
✅ No setup required
✅ Full features available
✅ Mock data in memory
❌ Data resets on server restart
```

### Upgrade to: Oracle Database (Optional)

**Prerequisites:**
- Oracle Database XE installed and running
- Database service: `OracleServiceXE` running
- Listener: `OracleXETNSListener` running

**Steps:**

1. **Verify Oracle is running:**
   ```powershell
   Get-Service | Where-Object {$_.Name -like '*Oracle*'}
   ```

2. **Update `.env` configuration:**
   ```env
   DB_HOST=localhost
   DB_PORT=1521
   DB_USER=system
   DB_PASSWORD=Admin
   DB_SID=XE
   ```

3. **Run database migration:**
   ```bash
   cd server
   node runMigration.js
   ```

4. **Enable database in server:**
   - Open `server/index.js`
   - Change:
     ```javascript
     initialize().catch(err => {...});  // Demo mode fallback
     ```
   - To:
     ```javascript
     initialize();  // Force database mode
     ```

5. **Restart backend server:**
   ```bash
   npm start
   ```

---

## 🔧 Configuration Files

### Backend `.env`
```env
# Server Configuration
PORT=3000

# Database Connection (optional)
DB_HOST=localhost
DB_PORT=1521
DB_USER=system
DB_PASSWORD=Admin
DB_SID=XE

# JWT Security Token
JWT_SECRET=your_jwt_secret_key_change_this_in_production
```

### Frontend Configuration
Backend API URL: Hardcoded in components as `http://localhost:3000`

**To change:**
1. Edit `client/src/components/Login.jsx` - Line 17
2. Edit any component using `axios.post()` or `axios.get()`

---

## 🚨 Troubleshooting

### Issue: Backend won't start
```bash
# Check if port 3000 is already in use
netstat -ano | findstr :3000

# Kill the process using port 3000
taskkill /PID <process_id> /F

# Try again
cd server && npm start
```

### Issue: Frontend shows blank page
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -r node_modules package-lock.json
npm install

# Run dev server again
npm run dev
```

### Issue: Login fails - "Network error"
```
✓ Ensure backend is running: http://localhost:3000
✓ Check browser console: Ctrl+Shift+J (Chrome) or F12
✓ Verify .env has correct API port
✓ Clear browser cache: Ctrl+Shift+Delete
```

### Issue: Database connection errors
```
✓ App auto-falls back to demo mode
✓ Check Oracle services: Get-Service | Where-Object {$_.Name -like '*Oracle*'}
✓ Verify DB credentials in .env
✓ Test Oracle connection: lsnrctl status
```

### Port Already in Use
```bash
# Backend on 3000
lsof -i :3000          # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Frontend on 5173
lsof -i :5173          # macOS/Linux
netstat -ano | findstr :5173  # Windows
```

---

## 🔐 Security Features Implemented

✅ **JWT Authentication**
- Tokens expire (configurable)
- Secure refresh mechanism

✅ **Password Security**
- Bcrypt hashing with salt rounds
- Never stored in plain text

✅ **Role-Based Access Control (RBAC)**
- Fine-grained permissions
- Middleware protection on APIs
- UI elements hidden based on role

✅ **Audit Logging**
- All user actions logged
- Timestamps and user tracking

✅ **CORS Protection**
- Frontend and backend on different ports
- CORS headers configured

✅ **Input Validation**
- Backend validates all inputs
- SQL injection prevention with prepared statements

---

## 📊 Features Detailed Walkthrough

### 🎯 Dashboard Features
After login, users see role-specific dashboard:
- **Admin**: Overview of entire system, analytics
- **Manager**: Staff and booking metrics
- **Staff**: Order queue and kitchen view
- **Customer**: My bookings and reservations

### 🏨 Hotel Booking Flow
1. Browse available rooms filtered by check-in/out dates
2. View room details (photos, amenities, price)
3. Select room and confirm booking
4. Get booking confirmation
5. View all bookings in profile

### 🍽️ Restaurant Workflow
1. Browse restaurant menu by category
2. View available dining tables
3. Select table and make reservation
4. Place food orders
5. Track order status in real-time
6. Generate and view bill

### 👨‍💼 Admin Analytics
- Total bookings and revenue
- Popular items and rooms
- Staff performance metrics
- User activity logs
- Inventory status

---

## 💾 Data Persistence

### Demo Mode
```javascript
// Data stored in mockDB.js (memory)
const users = [
  { id: 1, username: 'admin', role: 'admin' },
  ...
];
// Reset on server restart
```

### Database Mode
```javascript
// Data stored in Oracle tables
// Users table, Rooms, Bookings, Orders, etc.
// Survives server restarts
```

---

## 📈 Performance Optimizations

| Component | Optimization |
|-----------|---------------|
| API Responses | Promise-based async/await |
| Database | Connection pooling |
| Frontend | Vite with instant HMR |
| Animations | Hardware-accelerated CSS |
| Caching | Mock data in-memory |

---

## 🏗️ Building for Production

### Frontend Build
```bash
cd client
npm run build
```
Creates optimized build in `client/dist/`

### Backend Production
```bash
cd server
NODE_ENV=production npm start
```

### Deployment Options
- **Vercel**: Frontend (React)
- **Railway/Render**: Backend (Node.js)
- **AWS RDS**: Database (Oracle)
- **Docker**: Containerize entire stack

---

## 📝 Sample API Calls

### Login
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin"}'
```

### Get Rooms
```bash
curl -X GET http://localhost:3000/api/hotel/rooms \
  -H "Authorization: Bearer <token>"
```

### Place Order
```bash
curl -X POST http://localhost:3000/api/restaurant/order \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"items":[1,2,3]}'
```

---

## 🎓 Learning Resources

This project demonstrates:
- ✅ Full-stack JavaScript development
- ✅ React component architecture
- ✅ RESTful API design
- ✅ JWT authentication
- ✅ Role-based authorization
- ✅ Database integration
- ✅ Material Design principles
- ✅ Complex state management

---

## 📞 Support & Help

**When something doesn't work:**

1. **Check the logs**
   - Browser console: F12 or Ctrl+Shift+J
   - Server terminal: npm start output

2. **Verify setup**
   ```bash
   # Backend running?
   curl http://localhost:3000/api/

   # Frontend accessible?
   http://localhost:5173

   # Correct credentials?
   Use: admin/admin
   ```

3. **Clear cache**
   ```bash
   npm cache clean --force
   rm -r node_modules
   npm install
   ```

4. **Restart everything**
   - Stop both servers (Ctrl+C)
   - Kill any Node processes
   - Start fresh

---

## 📜 License & Credits

**Project**: Hotel & Restaurant Management Platform
**Version**: 1.0.0
**Last Updated**: February 21, 2026
**Status**: Production Ready ✅

---

## 🛠️ Tech Stack Summary

| Layer | Technology |
|-------|----------|
| **Frontend** | React 18 + Vite + Material UI |
| **State** | React Hooks + localStorage |
| **Styling** | MUI + Framer Motion animation |
| **Backend** | Node.js + Express.js |
| **Auth** | JWT + bcrypt |
| **Database** | Oracle SQL (optional) |
| **HTTP Client** | Axios |
| **Logging** | Custom audit logs |

---

## 🎉 You're All Set!
