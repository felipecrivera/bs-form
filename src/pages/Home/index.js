export default function Home() {
  return (
    <div className="bg-body-secondary">
      <div className="container">
        <div className="row pt-3">
          <div className="col-11 row">
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Invoice(s) related to this shipment
                <button className="mt-2 btn btn-outline-secondary text-black">
                  <i className="bi bi-upload"></i>
                  <br />
                  Click to select documents
                  <br /> or Drag and Drop to upload
                </button>
              </div>
            </div>
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Your own Certificate of Origin (optional)
                <button className="mt-2 btn btn-outline-secondary text-black">
                  <i className="bi bi-upload"></i>
                  <br />
                  Click to select documents
                  <br /> or Drag and Drop to upload
                </button>
              </div>
            </div>
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Additional Attachments (optional)
                <button className="mt-2 btn btn-outline-secondary text-black">
                  <i className="bi bi-upload"></i>
                  <br />
                  Click to select documents
                  <br /> or Drag and Drop to upload
                </button>
              </div>
            </div>
          </div>
          <div className="col-1 text-end d-flex flex-column align-items-end">
            <div>
              <button className="btn">
                <i className="bi fs-2 bi-x-circle"></i>
              </button>
            </div>
            <div>
              <button className="btn">
                <i className="bi fs-2 bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
