# Education Planner

A study schedule web app built with ReactJS for the Geekster assignment.

## What it does

- Add a subject name and how many hours you want to study
- Adjust hours using + and − buttons
- Remove subjects you no longer need
- Data stays saved even if you refresh the page (localStorage)

## Project structure

```
src/
├── components/
│   ├── SubjectCard.jsx   ← one subject row with +/- and delete
│   └── SubjectCard.css
├── App.jsx               ← main logic, useState, localStorage
├── App.css
└── index.js
```

## How it works

- `useState` manages the subjects list and the input fields
- `useEffect` reads from localStorage on page load
- Another `useEffect` saves to localStorage whenever subjects change
- `SubjectCard` gets the subject data and handler functions as props

## Getting started

```bash
npm install
npm start
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

Make sure to update the `homepage` field in `package.json` with your GitHub username first.

## Tech used

- ReactJS (useState, useEffect)
- localStorage for data persistence
- CSS
