import React from "react";
import { Link } from "react-router-dom";
import { projects, assignements } from "../Routes/Paths";

function Dashboard() {
  return (
    <div>
      <h2 className="text-center">DASHBOARD</h2>
      <div className="container text-center">
        <hr />
        <h5 className="text-center">Assignments</h5>
        <div className="row">
          {assignements.map((itm) => {
            return (
              <div className="col-md-3" key={itm.id}>
                <div className="card">
                  <img src={itm.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{itm.title}</h5>
                    <p className="card-text">{itm.description}</p>
                    <Link to={itm.linkPath} className="btn btn-success">
                      Open Project
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <h5 className="text-center">Study Projects</h5>
        <div className="row">
          {projects.map((itm) => {
            return (
              <div className="col-md-3 my-4" key={itm.id}>
                <div className="card">
                  <img src={itm.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{itm.title}</h5>
                    <p className="card-text">{itm.description}</p>
                    <Link to={itm.linkPath} className="btn btn-success">
                      Open Project
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
