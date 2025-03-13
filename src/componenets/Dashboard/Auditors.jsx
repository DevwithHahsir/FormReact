import React from "react";
import "./Auditors.css";

const auditors = [
  { name: "Alexander Pierce", date: "Today", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Norman", date: "Yesterday", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Jane", date: "12 Jan", img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "John", date: "12 Jan", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Alexander", date: "13 Jan", img: "https://randomuser.me/api/portraits/men/4.jpg" },
  { name: "Sarah", date: "14 Jan", img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Nora", date: "15 Jan", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Nadia", date: "15 Jan", img: "https://randomuser.me/api/portraits/women/4.jpg" },
];

const Auditors = () => {
  return (
    <div className="auditors-container">
      {/* Header */}
      <div className="auditors-header">
        <h3>Auditors</h3>
        <button className="new-auditor-btn">New Auditors</button>
      </div>

      {/* Auditors Grid */}
      <div className="auditors-grid">
        {auditors.map((auditor, index) => (
          <div className="auditor-card" key={index}>
            <img src={auditor.img} alt={auditor.name} />
            <p className="auditor-name">{auditor.name}</p>
            <p className="auditor-date">{auditor.date}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="view-all">
        <button>View All Auditors</button>
      </div>
    </div>
  );
};

export default Auditors;
