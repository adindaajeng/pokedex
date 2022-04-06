import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavHeader = () => {
  const favorite = useSelector((state) => {
    return state.favorite;
  });

  const catched = useSelector((state) => {
    return state.catched;
  });

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark px-5 ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            alt="LOGO"
            className="w-40 me-4"
          />
          POKEMON LIBRARY
        </Link>

        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item pointer">
            <Link className="position-relative mx-2 nav-link" to="/catched">
              Catched Pokemon
              {catched.catched.length ? (
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-secondary">
                  {catched.catched.length}
                </span>
              ) : null}
            </Link>
          </li>
          <li className="nav-item pointer">
            <Link className="position-relative mx-2 nav-link" to="/favorite">
              Favorite
              {favorite.favorite.length ? (
                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-secondary">
                  {favorite.favorite.length}
                </span>
              ) : null}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavHeader;
