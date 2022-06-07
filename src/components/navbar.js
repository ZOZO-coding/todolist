import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {/* <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="">
                Home
              </a>
            </li> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="http://www.google.com" target="_blank" rel="noreferrer"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Useful Websites
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="http://www.google.com" target="_blank" rel="noreferrer">
                    Google
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="http://www.yelp.com" target="_blank" rel="noreferrer">
                    Yelp
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="http://www.nba.com" target="_blank" rel="noreferrer">
                    NBA
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
