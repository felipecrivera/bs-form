export default function Navbar() {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="col-10 offset-1 d-flex justify-content-between align-items-center">
          <div>
            <a className="text-white" href="/">
              <u>Application in Progress</u>
            </a>
            <a className="text-white ms-3 text-decoration-none" href="/">
              Returned Applications
            </a>
          </div>
          <div>
            <div className="d-flex align-items-center gap-3">
              <div className="text-white text-end">
                <div className="fs-7">User Name</div>
                <div className="fs-7">User Company Name</div>
              </div>
              <i className="bi bi-person text-white fs-3"></i>
              <i className="bi bi-gear text-white fs-3"></i>
              <i className="bi bi-question-circle text-white fs-3"></i>
              <i className="bi bi-box-arrow-right text-white fs-3"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
