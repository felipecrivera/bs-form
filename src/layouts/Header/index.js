export default function Header() {
  return (
    <div className="container">
      <div className="col-10 offset-1">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid" style={{ height: "103px" }}>
            <div
              className="text-primary h-100 bg-body-secondary d-flex flex-column justify-content-center align-items-center"
              style={{ width: "384px" }}
            >
              <div>
                <b>
                  <i>Branding Placeholder1</i>
                </b>
              </div>
              <div>
                <b>
                  <i>384 * 103px</i>
                </b>
              </div>
            </div>

            <div className="d-flex align-items-end h-100">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link mx-2 text-primary" href="/">
                    <b><u>Home</u></b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 text-black" href="/">
                    <b>History</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 text-black" href="/">
                    <b>Data</b>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 text-black" href="/">
                    <b>Reports</b>
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="text-primary h-100 bg-body-secondary d-flex flex-column justify-content-center align-items-center"
              style={{ width: "384px" }}
            >
              <div>
                <b>
                  <i>Branding Placeholder1</i>
                </b>
              </div>
              <div>
                <b>
                  <i>384 * 103px</i>
                </b>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
