import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "./Chart.jsx";  


function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="d-flex help">
      {/* Sidebar */}
      <div className="sidebar p-3 bg-white shadow ">
        <h3 className="text-primary">INFLUENCY</h3>
        <ul className="nav flex-column">
          <li className="nav-item"><a href="#" className="nav-link text-dark">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark">Post</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark">Donators</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark">Page</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark">Messages</a></li>
          <li className="nav-item"><a href="#" className="nav-link text-dark">Statistics</a></li>
        </ul>
        <div className="p-3 bg-light rounded text-center main">
          <p className="mb-2">Upgrade to Pro</p>
          <button className="btn btn-warning fw-bold">Upgrade for $10</button>
        </div>

      </div>

      {/* Main Content */}
      <div className="content p-4 w-100">
        <h2 className="mb-4 tt">
          Donators <i className="bi bi-search"></i>
          <input 
            type="text" 
            placeholder="Search..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </h2> 

        <div className="row g-4 important">
          <div className="col-12 col-lg-3">
            <div className="text-white first">
              <h4>$740.89</h4>
              <p>In this month</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white second">
              <h4>80%</h4>
              <p>Active Donation</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white bg-secondary fourth">
              <h4>38</h4>
              <p>In this month</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-white third">
              <h4>$8,234.19</h4>
              <p>For all time</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <Chart searchQuery={search} /> 
            </div>
            <div className="col-12 col-lg-4">
              <Chart searchQuery={search} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
