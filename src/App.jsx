import React, { useState, useEffect } from "react";
import SubjectCard from "./components/SubjectCard";
import "./App.css";

function App() {
  const [subjectName, setSubjectName] = useState("");
  const [subjectHours, setSubjectHours] = useState(1);
  const [subjects, setSubjects] = useState([]);

  // load from local storage when page loads
  useEffect(() => {
    const savedSubjects = localStorage.getItem("subjects");
    if (savedSubjects) {
      setSubjects(JSON.parse(savedSubjects));
    }
  }, []);

  // save to local storage whenever subjects change
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  function handleAdd() {
    if (subjectName.trim() === "") {
      alert("Please enter a subject name");
      return;
    }
    if (subjectHours < 1) {
      alert("Hours must be at least 1");
      return;
    }

    const newSubject = {
      id: Date.now(),
      name: subjectName,
      hours: Number(subjectHours),
    };

    setSubjects([...subjects, newSubject]);
    setSubjectName("");
    setSubjectHours(1);
  }

  function handleIncrease(id) {
    const updated = subjects.map((subject) => {
      if (subject.id === id) {
        return { ...subject, hours: subject.hours + 1 };
      }
      return subject;
    });
    setSubjects(updated);
  }

  function handleDecrease(id) {
    const updated = subjects.map((subject) => {
      if (subject.id === id && subject.hours > 1) {
        return { ...subject, hours: subject.hours - 1 };
      }
      return subject;
    });
    setSubjects(updated);
  }

  function handleDelete(id) {
    const updated = subjects.filter((subject) => subject.id !== id);
    setSubjects(updated);
  }

  const totalHours = subjects.reduce((sum, subject) => sum + subject.hours, 0);

  return (
    <div className="app">
      <div className="container">
        <h1 className="heading">Geekster Education Planner</h1>

        <div className="input-row">
          <input
            type="text"
            className="input-subject"
            placeholder="Subject"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <input
            type="number"
            className="input-hours"
            placeholder="Hours"
            min="1"
            value={subjectHours}
            onChange={(e) => setSubjectHours(e.target.value)}
          />
          <button className="btn-add" onClick={handleAdd}>
            Add
          </button>
        </div>

        {subjects.length > 0 && (
          <div className="schedule-section">
            <div className="schedule-header">
              <h2 className="schedule-title">Study Schedule</h2>
              <span className="total-hours">Total: {totalHours} hrs</span>
            </div>
            <div className="subjects-list">
              {subjects.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  id={subject.id}
                  name={subject.name}
                  hours={subject.hours}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        )}

        {subjects.length === 0 && (
          <p className="empty-msg">No subjects added yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}

export default App;
