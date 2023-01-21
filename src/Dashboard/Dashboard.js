import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../Routes/Paths";

function Dashboard() {
  return (
    <div>
      <h2 className="text-center">DASHBOARD</h2>
      <div className="container text-center">
        <div className="row my-4">
          {paths.map((itm) => {
            return (
              <div className="col-md-3" key={itm.id}>
                <div className="card" style={{ width: "18rem" }}>
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
