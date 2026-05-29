import React from "react";
import "./SubjectCard.css";

const SubjectCard = (props) => {
  return (
    <div className="subject-card">
      <div className="subject-name">{props.name}</div>
      <div className="subject-controls">
        <button className="btn-control" onClick={() => props.onDecrease(props.id)}>−</button>
        <span className="hours-display">{props.hours} hrs</span>
        <button className="btn-control" onClick={() => props.onIncrease(props.id)}>+</button>
      </div>
      <button className="btn-delete" onClick={() => props.onDelete(props.id)}>Remove</button>
    </div>
  );
};

export default SubjectCard;
