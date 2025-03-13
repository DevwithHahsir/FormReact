import React from "react";
import "./WorkingLog.css"; // Import CSS for styling

const logData = [
  { id: "OR8812", customer: "Call of Duty IV", status: "Shipped", description: "90,80,90~70,61~83,63" },
  { id: "OR8182", customer: "Samsung Smart TV", status: "Pending", description: "90,80,90~70,61~83,68" },
  { id: "OR7425", customer: "iPhone 5 Plus", status: "Delivered", description: "90,80,90~70,61~83,63" },
  { id: "OR7426", customer: "Samsung Smart TV", status: "Processing", description: "90,80,90~70,61~83,63" },
  { id: "OR8186", customer: "Samsung Smart TV", status: "Pending", description: "90,80,90~70,61~83,68" },
  { id: "OR7426", customer: "iPhone 6 Plus", status: "Delivered", description: "90,80,90~70,61~83,63" },
  { id: "OR8847", customer: "Call of Duty IV", status: "Shipped", description: "90,80,90~70,61~83,63" }
];

const WorkingLog = () => {
  return (
    <div className="working-log-container">
      <div className="header">
        <h3>Working Log</h3>
        <button className="close-btn">✖</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Customer/ Auditor</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {logData.map((item, index) => (
            <tr key={index}>
              <td className="log-id">{item.id}</td>
              <td className="time">10:00 AM</td>
              <td className="customer">{item.customer}</td>
              <td className={`status ${item.status.toLowerCase()}`}>{item.status}</td>
              <td className="description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkingLog;
