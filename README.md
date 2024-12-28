# Flex Coder - Collaborative Online Code Editor

**Flex Coder** is a full-stack collaborative code editor designed to simplify coding, debugging, and sharing code snippets online. It offers real-time code execution, error handling, and a rich set of features like commenting, modification, and code sharing. With support for multiple programming languages, Flex Coder is the ultimate platform for developers to write, share, and collaborate on code.

---



## 📸 **Screenshots**
![image](https://github.com/user-attachments/assets/80af9e70-f63d-4c89-86a5-80fd99618e8b)

![image](https://github.com/user-attachments/assets/a9049aa4-1a8f-4e5e-abcc-90f904730b0b)



## 🚀 **Features**

### 1. **Real-Time Code Execution & Error Handling**
- Execute code directly in the browser.
- Display detailed error messages to aid debugging.
- Save code and errors to the database using **Convex** for persistence.

### 2. **User Authentication & Session Management**
- Secure login and logout functionality powered by **Clerk**.
- Role-based access control for enhanced security.

### 3. **Collaborative Coding Platform**
- Share code snippets with others on a dedicated snippet server.
- Allow others to **comment** and **modify** code directly.
- Compare different versions of code side-by-side.

### 4. **Favorite & Star Feature**
- Star favorite code snippets for quick access later.
- Organize frequently used snippets efficiently.

### 5. **Search Functionality**
- Find code snippets easily with keyword-based search.
- Filter results based on language or tags.

### 6. **Multi-Language Support**
- Write and run code in over **5 languages**, including:
  - **Python**
  - **JavaScript**
  - **Java**
  - **C++**

### 7. **Analytics & Progress Tracking**
- Track contributions and activity through the **personal analytics manager**.
- View historical data of uploaded and modified snippets.

### 8. **Payment Gateway Integration**
- Seamless payments with **Lemon Squeezy** for premium features.
- Subscription-based model for enhanced functionality.

---

## 🛠️ **Tech Stack**

### **Frontend**
- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS** for responsive and modern styling.
- **Material UI** for icons and components.

### **Backend**
- **Convex** for database and server-side storage.
- **Clerk** for authentication and user session management.
- **Lemon Squeezy** for payment processing.

---

## 📦 **Getting Started**

### **Prerequisites**
- Node.js (v14 or later)
- npm or yarn

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flex-coder.git
   cd flex-coder
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add the following variables:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   LEMON_SQUEEZY_API_KEY=your_lemon_squeezy_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## 💡 **Usage**

1. **Sign Up / Log In:**
   - Create an account using Clerk.
   - Log in securely to access features.

2. **Create & Execute Code:**
   - Write code in the editor and execute it directly.
   - View results or errors in the output panel.

3. **Share Snippets:**
   - Save code snippets to the snippet server.
   - Share URLs with others for collaboration.

4. **Comment and Modify:**
   - Add comments to others' code snippets.
   - Modify shared snippets and compare versions.

5. **Track Progress:**
   - Access the analytics page to view past activities and contributions.

6. **Search & Star:**
   - Search for existing code snippets.
   - Star favorite snippets for later reference.

7. **Upgrade with Payments:**
   - Use Lemon Squeezy to purchase premium features.

---



---

## 📧 **Contact**
For support or inquiries, reach out to:
- **Email:** yuvraj.singh.mait@gmail.com

