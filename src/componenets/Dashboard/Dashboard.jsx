import React from "react";
import "./dashboard.css";
import { FiShoppingBag } from "react-icons/fi";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiProgress3Line } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa";
import BarChart from "./Barchart";
import WorkingLog from "./WorkingLog";
import CalendarComponent from "./CalendarComponent";
import Auditors from "./Auditors";






export default function Dashboard() {
  return (
    <>
      <div className="Dash-main-container">
        <div className="navbar">
          <div className="nav-logo">
            <h2>AfaqTechnology</h2>
          </div>

          <div className="search">
            <input type="text" placeholder="Search" />
          </div>

          <div className="nav-items">
            <ul type="none">
              <li>
                <a href="">Dashboard</a>
              </li>
              <li>
                <a href="">Customer Profile</a>
              </li>
              <li>
                <a href="">Auditor Profile</a>
              </li>

              <select name="" id="">
                <option value="">Services Offer</option>
                <option value="">
                  <a href="">Service List</a>
                </option>
                <option value="">Service Details</option>
              </select>

              <li>
                <a href="">Required Authentication</a>
              </li>
              <li>
                <a href="">Auditor Task List</a>
              </li>
              <li>
                <a href="">verification</a>
              </li>

              <select name="" id="">
                <option value="">Reports</option>
                <option value="">
                  <a href="">Service List</a>
                </option>
                <option value="">Service Details</option>
              </select>

              <select name="" id="">
                <option value="">Setups</option>
                <option value="">
                  <a href="">Branches</a>
                </option>
                <option value="">Certificate Format</option>
              </select>
            </ul>
          </div>
        </div>



     {/* profile sectionnnnnnnnnnnnnnnnnnnnnn */}

     {/* <div className="profile-container">
      <div className="heading"><h4>Dashboard</h4></div>
      <div className="log"></div>

     </div> */}




        <div className="dashboard-container">
          {/* SECTION     11111111111 */}

          <div className="section1">
            <div className="box box1">
              <div className="detail">
                {/* count and title */}
                <div className="count-title">
                  <h3>150</h3>
                  <h5>Customers</h5>
                </div>
                {/* icon */}
                <div className="box-icon">
                  <FiShoppingBag />
                </div>
              </div>
              <div className="info">
                {" "}
                <a href="http://">More info </a>
                <FaArrowRight />
              </div>
            </div>

            <div className="box box2">
              <div className="detail">
                {/* count and title */}
                <div className="count-title">
                  <h3>15</h3>
                  <h5>Certifications</h5>
                </div>
                {/* icon */}
                <div className="box-icon">
                  <IoStatsChartOutline />
                </div>
              </div>
              <div className="info">
                {" "}
                <a href="http://">More info</a>
                <FaArrowRight />
              </div>
            </div>

            <div className="box box3">
              <div className="detail">
                {/* count and title */}
                <div className="count-title">
                  <h3>44</h3>
                  <h5>Auditors</h5>
                </div>
                {/* icon */}
                <div className="box-icon">
                  <IoPersonAddOutline />
                </div>
              </div>
              <div className="info">
                {" "}
                <a href="http://">More info</a>
                <FaArrowRight />
              </div>
            </div>

            <div className="box box4">
              <div className="detail">
                {/* count and title */}
                <div className="count-title">
                  <h3>56</h3>
                  <h5>In Progress</h5>
                </div>
                {/* icon */}
                <div className="box-icon">
                  <RiProgress3Line />
                </div>
              </div>
              <div className="info">
                {" "}
                <a href="http://">More info</a>
                <FaArrowRight />
              </div>
            </div>
          </div>

          {/* section       22222222222222222222222 */}

          <div className="section2">
            <div className="chart">
              <BarChart />
            </div>
          </div>


          {/* SECTION 333333333333333333333333333 */}

          <div className="section3">


            <div className="sec3 ">
              <WorkingLog/>
              <CalendarComponent/>
              <Auditors/>

            </div>
          
        
          </div>



         





        </div>
      </div>
    </>
  );
}
