import React from "react";
import "../cssFiles/contatc.css";

export default function Contacts() {
  return (
    <>
      <div className="contact-detail">
        <div className="heading">
          <h1>Contact Details</h1>
        </div>
        <table>
          <tr>
            <th>Date</th>
            <td>
              <input type="date" name="" id="" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Client's/Factory Representative Name</th>
            <td>
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Designation</th>
            <td>
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Contact/Email address</th>
            <td>
              <input type="email" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Contact/Mobile Number</th>
            <td>
              <input type="number" placeholder="Enter details" />
            </td>
          </tr>
        </table>
      </div>



      <div className="contact-detail factoryDetail">
        <div className="heading">
          <h1>Client's Factory Details</h1>
        </div>
        <table>
          <tr>
            <th>Number of Employees</th>
            <td className="gender">
              <tr>
                Male:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter details"
                />
              </tr>
              <tr>
                Female:{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter details"
                />
              </tr>
            </td>
          </tr>
          <tr>
            <th>Number of Shifts</th>
            <td>
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Area of Factory (sqm/sqf)</th>
            <td>
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Production Capacity Unit</th>
            <td className="unit">
              Units:
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
          <tr>
            <th>Major Production Process</th>
            <td>
              <input type="text" placeholder="Enter details" />
            </td>
          </tr>
        </table>
      </div>




      <div className="form-container contact-detail">
            <div className="heading">
                <h1>Required Services</h1>
            </div>
        <table>
            
          <thead>
            <tr>
              <th className="row1">HIGG FEM Verification</th>
            </tr>
            <tr>
              <th>SL NO</th>
              <th>Required Information</th>
              <th className="yes">Yes</th>
              <th className="no">No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>Is it First time verification?</th>
              <td className="yes">
                <input type="radio" name="verification1" />
              </td>
              <td className="no">
                <input type="radio" name="verification1" />
              </td>
            </tr>
            <tr>
              <th>2</th>
              <th>Does your facility have any wet process?</th>
              <td className="yes">
                <input type="radio" name="wetProcess" />
              </td>
              <td className="no">
                <input type="radio" name="wetProcess" />
              </td>
            </tr>
            <tr>
              <th>3</th>
              <th>Does your facility have onsite ETP?</th>
              <td className="yes">
                <input type="radio" name="onsiteETP" />
              </td>
              <td className="no">
                <input type="radio" name="onsiteETP" />
              </td>
            </tr>
            <tr>
              <th>4</th>
              <th>Have you completed only foundation?</th>
              <td className="yes">
                <input type="radio" name="foundation" />
              </td>
              <td className="no">
                <input type="radio" name="foundation" />
              </td>
            </tr>
            <tr>
              <th>5</th>
              <th>Have you completed level2/level3 for chemical section?</th>
              <td className="yes">
                <input type="radio" name="chemicalSection" />
              </td>
              <td className="no">
                <input type="radio" name="chemicalSection" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
