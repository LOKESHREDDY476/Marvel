<header className="container mt-3">
        <div className="row align-items-center">
          {/* 4 Columns for the Logo */}
          <div className="col-md-4">
            <img
              src="https://www.achieversit.com/assets/images/logo-white.png"
              alt="Ait"
              className="img-fluid logo"
            />
          </div>

          {/* 6 Columns for the Navbar */}
          <div className="col-md-8">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/services" className="nav-link">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/support" className="nav-link">
                      Support
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>