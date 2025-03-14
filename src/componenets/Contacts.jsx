import React from "react";
import "../cssFiles/contatc.css";

export default function Contacts() {
  return (
    <>
              <div className="form-container">
      <h1>Contact Details</h1>
      <table className="common-access-table">
        <tbody>
          <tr>
            <td>Date</td>
            <td> <input type="date" /></td>
          </tr>
          <tr>
            <td>Name of the factory/client</td>
            <td><input type="text"  placeholder="Enter details"/></td>
          </tr>
          <tr>
            <td>Address</td>
            <td><input type="text"  placeholder="Enter details"/></td>
          </tr>
          <tr>
            <td>Factory/Cithers representative name</td>
            <td><input type="text"  placeholder="Enter details"/></td>
            
          </tr>
          <tr>
            <td>Designation</td>
            <td><input type="text"  placeholder="Enter details"/></td>
           
          </tr>
          <tr>
            <td>Contact email address</td>
            <td><input type="text"  placeholder="Enter details"/></td>
            
          </tr>
          <tr>
            <td>Contact emails number</td>
            <td><input type="text"  placeholder="Enter details"/></td>
            
          </tr>
        </tbody>
      </table>





      <div className="client-factory-details">
      <h2>Client/Factory Details</h2>
      <table className="details-table">
        <tbody>
          <tr>
            <td>Number of employees</td>
            <td className="gender">
              Male: <input type="text" placeholder="Enter number" />
              Female: <input type="text" placeholder="Enter number" />
            </td>
          </tr>
          <tr>
            <td>Number of shifts</td>
            <td><input type="text" placeholder="Click or tap here to enter text." /></td>
          </tr>
          <tr>
            <td>Area of the factory (sqm/sqr)</td>
            <td><input type="text" placeholder="Click or tap here to enter text." /></td>
          </tr>
          <tr>
            <td>Production Capacity</td>
            <td className="unit">
              <input type="text" placeholder="Enter capacity" />
              <select>
                <option>Units</option>
                <option>Other</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Major Production processes</td>
            <td><input type="text" placeholder="Click or tap here to enter text." /></td>
          </tr>
        </tbody>
      </table>

      <h3>Required service (s)</h3>
    </div>







    
      <p>Please put this (✓) mark to your graphics service.</p>

      <h2>HUGE FEW Verification </h2>

      Copy
<table className="verification-table">
  <thead>
    <tr>
      <th>SL No</th>
      <th>Required information</th>
      <th>No</th>
      <th>Yes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Is it first  time verification at your facility?</td>
      <td><input type="radio" name="row1" value="No" /></td>
      <td><input type="radio" name="row1" value="Yes" /></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Does your facility have any wet process! (L., washing, drying etc.)</td>
      <td><input type="radio" name="row2" value="No" /></td>
      <td><input type="radio" name="row2" value="Yes" /></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Does your facility have onsite EFF?</td>
      <td><input type="radio" name="row3" value="No" /></td>
      <td><input type="radio" name="row3" value="Yes" /></td>
    </tr>
    <tr>
      <td>4</td>
      <td>Have you completed only foundations?</td>
      <td><input type="radio" name="row4" value="No" /></td>
      <td><input type="radio" name="row4" value="Yes" /></td>
    </tr>
    <tr>
      <td>5</td>
      <td>Have you completed Level 2 / Level 3 for chemical sections?</td>
      <td><input type="radio" name="row5" value="No" /></td>
      <td><input type="radio" name="row5" value="Yes" /></td>
    </tr>
  </tbody>
</table>

      <p className="veri-type1"><strong>Verification type:</strong> Onsite <input type="checkbox" />    Onsite <input type="checkbox" /></p>
      <p className="veri-type2"><strong>Language used for most of the employee:</strong> URDU</p>




      <h1>SICP Verification</h1>
      <table className="sicp-verification-table">
        <thead>
          <tr >
            <th>Verification scope</th>
            <th className="verification-scope">Step 1. <input type="checkbox" /></th>
            <th className="verification-scope">Step 2. <input type="checkbox" /></th>
            <th className="verification-scope">Step 3. <input type="checkbox" /></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Self-assessment passing Date</td>
            <td><input type="date" name="" id="" /></td>
       
          </tr>
        </tbody>
      </table>

      <h2 className="certification1">C-TPAT Audit <input type="checkbox" /></h2>
      <th className="certification2"> SO Management System Certification <input type="checkbox" /></th>
      <table className="iso-table">
        <thead>
          <tr>
            <td>ISO 9001</td>
            <td><input type="checkbox" /></td>
            <td>ISO 13483</td>
            <td><input type="checkbox" /></td>
            <td>Type of audit</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ISO 14001</td>
            <td><input type="checkbox" /></td>
            <td>ISO 27061</td>
            <td><input type="checkbox" /></td>
            <td>Initial</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>ISO 45001</td>
            <td><input type="checkbox" /></td>
            <td>ISO 37051</td>
            <td><input type="checkbox" /></td>
            <td>Surveillance 1</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>ISO 20000</td>
            <td><input type="checkbox" /></td>
            <td>GMP</td>
            <td><input type="checkbox" /></td>
            <td>Surveillance 2</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>ISO 25000-1</td>
            <td><input type="checkbox" /></td>
            <td>NACCP</td>
            <td><input type="checkbox" /></td>
            <td>Re-suell</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>ISO 23000</td>
            <td><input type="checkbox" /></td>
            <td>INS</td>
            <td><input type="checkbox" /></td>
            <td>Re-conflication</td>
            <td><input type="checkbox" /></td>
            
          </tr>
        </tbody>
      </table>

      <th className="environment">Environmental Parameter Testing <input type="checkbox" /></th>
      <table className="environmental-table">
        <thead>
          <tr>
            <td>Index Level Monitoring</td>
            <td><input type="checkbox" /></td>
            <td>Ambient Air Quality Monitoring</td>
            <td><input type="checkbox" /></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Light Level Monitoring</td>
            <td><input type="checkbox" /></td>
            <td>GHG Inventory</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Humidity Level Monitoring</td>
            <td><input type="checkbox" /></td>
            <td>OSD Inventory</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Trace Air Emission Test</td>
            <td><input type="checkbox" /></td>
            <td>Environmental Management Plan (EMF)</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Inflow Air Quality Monitoring</td>
            <td><input type="checkbox" /></td>
            <td>Environmental Parameter Testing (EM)</td>
            <td><input type="checkbox" /></td>
          </tr>
        </tbody>
      </table>

      <th className="sus">Sustainability Services <input type="checkbox" /></th>
      <table className="sustainability-table">
        <thead>
          <tr>
            <td>Water Guaranteeing</td>
            <td><input type="checkbox" /></td>
            <td>Facial and Labor Conformity Assessment (SACA)</td>
            <td><input type="checkbox" /></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Energy Assessment</td>
            <td><input type="checkbox" /></td>
            <td>Environmental Assessment for Conformity (SACA)</td>
            <td><input type="checkbox" /></td>
          </tr>
          <tr>
            <td>Zero Waste to Lowfill certification</td>
            <td><input type="checkbox" /></td>
            <td>Chemical Traceability Assessment (CTA)</td>
            <td><input type="checkbox" /></td>
          </tr>
        </tbody>
      </table>

      <div className="signature-section">
        <th>Signature of Factory/client representation:</th>
      </div>

      <div className="date-section">
        <p>Date: 15-09-2023</p>
        <p><em>Note: Please use official map</em></p>
      </div>
    </div>
    </>
  );
}
