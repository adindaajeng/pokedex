import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, img, type }) => {
  return (
    <div className="col-md-3 col-6 ">
      <div className="card mx-3 my-4 card-shadow">
        <Link
          to={`/detail/${id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="card-header text-white bg-dark text-center">
            <strong>#0{id}</strong>
          </div>
          <img src={img} alt="IMG-POKEMON" className="card-img p-3 h-200" />
          <div className="card-body d-flex flex-column align-items-center">
            <div className="card-text">
              <strong>{name}</strong>
            </div>
            <div className="card-text">Type: {type}</div>
          </div>
          <div className="card-footer bg-dark text-white text-center">
            <strong className="text-white">See Detail</strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
