# Janhit Janta Party Website

A modern and responsive website developed for **Janhit Janta Party** to present the party's vision, mission, leadership, activities, and public initiatives through a clean and accessible digital platform.

## 📌 Project Overview

The Janhit Janta Party Website is a frontend web application built using modern web technologies.

The project is developed collaboratively by a team using **Git and GitHub**, with separate feature branches for individual team members and controlled integration into the `main` branch.

## 🚀 Features

* 🏠 Home page
* 👥 About / Party information
* 🎯 Vision and Mission
* 👤 Leadership information
* 📢 News and Updates
* 🖼️ Events and Gallery
* 🤝 Join / Support the Party
* 💰 Donation information
* 📞 Contact section
* 📱 Responsive design
* 🔗 React-based page routing
* ⚡ Fast development using Vite

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **Git**
* **GitHub**
* **React Router**

## 📂 Project Structure

```text
janhit-janta-party/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Vision.jsx
│   │   ├── Donor.jsx
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

> The folder structure may evolve as the project develops.

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

```bash
cd janhit-janta-party
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## 🔀 Git & GitHub Workflow

This project follows a feature-branch workflow.

### Main branch

The `main` branch contains the stable and integrated version of the project.

### Feature branches

Each team member should work on their own feature branch.

Example:

```bash
git switch -c feature/home
```

After completing the work:

```bash
git add .
git commit -m "Add home page"
git push origin feature/home
```

Then create a **Pull Request** for review.

### Team Integration Workflow

```text
Team Member
     │
     ▼
Feature Branch
     │
     ▼
Commit Changes
     │
     ▼
Push to GitHub
     │
     ▼
Pull Request
     │
     ▼
Leader Review
     │
     ├── ❌ Changes Required
     │
     └── ✅ Approved
              │
              ▼
        Merge into main
```

## 👨‍💻 Team Development Rules

1. Do not directly develop on `main`.
2. Create a separate feature branch for your work.
3. Keep commits meaningful and focused.
4. Test your changes before creating a Pull Request.
5. Do not unnecessarily modify another team member's code.
6. Resolve merge conflicts carefully.
7. Pull the latest `main` before starting major integration work.
8. Only stable and reviewed code should be merged into `main`.
9. Do not commit unnecessary files such as:

   * `node_modules/`
   * `.env`
   * build/cache files
10. Keep the existing project structure unless a structural change is necessary.

## 📋 Useful Git Commands

### Check current branch

```bash
git branch
```

### Check changes

```bash
git status
```

### Get latest remote information

```bash
git fetch origin
```

### Update main

```bash
git switch main
git pull origin main
```

### Create a feature branch

```bash
git switch -c feature/your-feature
```

### Add a particular file

```bash
git add src/pages/Home.jsx
```

### Commit changes

```bash
git commit -m "Update Home page"
```

### Push feature branch

```bash
git push origin feature/your-feature
```

### Temporarily save uncommitted changes

```bash
git stash
```

### Restore stashed changes

```bash
git stash pop
```

## 📦 Adding Only One File From a Teammate Branch

If the team leader needs only one file from a teammate's branch instead of merging the entire branch:

```bash
git switch main
git pull origin main
```

Then:

```bash
git restore --source feature/about -- src/pages/About.jsx
```

Review the changes:

```bash
git diff -- src/pages/About.jsx
```

Then:

```bash
git add src/pages/About.jsx
git commit -m "Add About page"
git push origin main
```

> Before doing this, check whether the selected file depends on other files from the teammate's branch.

## 🧪 Testing

Before pushing or creating a Pull Request:

```bash
npm run dev
```

Check:

* Pages load correctly
* Navigation works
* Images and assets load correctly
* No console errors
* No broken imports
* Responsive layout works
* Existing pages are not broken

## 🐛 Common Problems

### Missing dependency

Run:

```bash
npm install
```

### Import error

Check:

* File name
* File path
* Uppercase/lowercase spelling
* File extension
* Whether the file actually exists

Example:

```text
Failed to resolve import "./Donor.css"
```

Make sure:

```text
Donor.jsx
Donor.css
```

are located where the import expects them.

### Merge conflict

Check:

```bash
git status
```

Open the conflicted files and resolve:

```text
<<<<<<< HEAD
Your code
=======
Other branch code
>>>>>>> feature/branch
```

Then:

```bash
git add .
git commit
```

## 📱 Responsive Design

The website is intended to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 🔮 Future Improvements

Potential future enhancements include:

* Backend/API integration
* Dynamic news and events
* Online membership system
* Donation/payment integration
* Admin dashboard
* Contact form backend
* Authentication
* Database integration
* SEO improvements
* Performance optimization
* Accessibility improvements

## 🤝 Contribution

Team members should follow the project's Git workflow when contributing.

### Contribution Steps

```text
1. Create feature branch
2. Develop feature
3. Test locally
4. Commit changes
5. Push branch
6. Create Pull Request
7. Leader reviews code
8. Make requested changes
9. Approval
10. Merge into main
```

## 👨‍💼 Project Integration

The project follows a centralized integration approach where the team leader reviews teammate contributions and integrates approved changes into the `main` branch.

The goal is to maintain:

* Clean code
* Consistent folder structure
* Stable builds
* Proper Git history
* Tested features
* Conflict-free integration

## 📄 License

This project is currently developed as a team project. Add the appropriate license here if the project is later released publicly.

---

## ⭐ Project Status

**Status:** 🚧 Under Development

The website is actively being developed and improved by the project team.
