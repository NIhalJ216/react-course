import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../Routes/Paths";

function Dashboard() {
  return (
    <div>
      <h2 className="text-center my-2">DASHBOARD</h2>
      <div className="container text-center">
        <hr />
        <h5 className="text-center my-2">Assignments</h5>
        <div className="row my-4">
          {/* {paths.map((itm) => {
            return ( */}
          <div className="col-md-3">
            <div className="card">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">title</h5>
                <p className="card-text">description</p>
                <Link to="/" className="btn btn-primary">
                  Open Project
                </Link>
              </div>
            </div>
          </div>
          {/* );
          })} */}
        </div>
        <hr />
        <h5 className="text-center my-2">Study Projects</h5>
        <div className="row my-4">
          {paths.map((itm) => {
            return (
              <div className="col-md-3" key={itm.id}>
                <div className="card">
                  <img src={itm.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{itm.title}</h5>
                    <p className="card-text">{itm.description}</p>
                    <Link to={itm.linkPath} className="btn btn-primary">
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
