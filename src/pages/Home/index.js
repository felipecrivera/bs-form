import { useState } from "react";
export default function Home() {
  const initData = {
    poNumberChecks: [],
    processingMethod: [],
  }

  const [formData, setFormData] = useState(initData);

  const resetForm = () => setFormData(initData)

  const handleFormDataChange = ({ key, value }) => {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleCheckboxChange = (ek, e) => {
    if (e.target.checked) {
      setFormData((prev) => {
        return {
          ...prev,
          [ek]: [...prev[ek], e.target.value],
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [ek]: prev[ek].filter((val) => val !== e.target.value),
        };
      });
    }
  };

  return (
    <div className="bg-body-secondary pb-5">
      <div className="container">
        <div className="row pt-3">
          <div className="col-11 row">
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Invoice(s) related to this shipment
                <button
                  className="mt-2 btn btn-outline-secondary text-black"
                  onClick={() =>
                    formData?.invoiceFile
                      ? handleFormDataChange({
                          key: "invoiceFile",
                          value: null,
                        })
                      : document.getElementById("invoiceFile").click()
                  }
                >
                  {formData?.invoiceFile ? (
                    <>
                      <i className="bi bi-x-square"></i>
                      <br />
                      Click to deselect documents
                      <br />
                      <span className="fs-7">{formData.invoiceFile?.name}</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-upload"></i>
                      <br />
                      Click to select documents
                      <br /> or Drag and Drop to upload
                    </>
                  )}
                </button>
                <input
                  id="invoiceFile"
                  type="file"
                  className="d-none"
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "invoiceFile",
                      value: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Your own Certificate of Origin (optional)
                <button
                  className="mt-2 btn btn-outline-secondary text-black"
                  onClick={() =>
                    formData?.certificateFile
                      ? handleFormDataChange({
                          key: "certificateFile",
                          value: null,
                        })
                      : document.getElementById("certificateFile").click()
                  }
                >
                  {formData?.certificateFile ? (
                    <>
                      <i className="bi bi-x-square"></i>
                      <br />
                      Click to deselect documents
                      <br />
                      <span className="fs-7">
                        {formData.certificateFile?.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-upload"></i>
                      <br />
                      Click to select documents
                      <br /> or Drag and Drop to upload
                    </>
                  )}
                </button>
                <input
                  id="certificateFile"
                  type="file"
                  className="d-none"
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "certificateFile",
                      value: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>
            <div className="col">
              <div className="p-1 bg-white text-center rounded-4">
                Additional Attachments (optional)
                <button
                  className="mt-2 btn btn-outline-secondary text-black"
                  onClick={() =>
                    formData?.attachmentsFile
                      ? handleFormDataChange({
                          key: "attachmentsFile",
                          value: null,
                        })
                      : document.getElementById("attachmentsFile").click()
                  }
                >
                  {formData?.attachmentsFile ? (
                    <>
                      <i className="bi bi-x-square"></i>
                      <br />
                      Click to deselect documents
                      <br />
                      <span className="fs-7">
                        {formData.attachmentsFile?.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-upload"></i>
                      <br />
                      Click to select documents
                      <br /> or Drag and Drop to upload
                    </>
                  )}
                </button>
                <input
                  id="attachmentsFile"
                  type="file"
                  className="d-none"
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "attachmentsFile",
                      value: e.target.files[0],
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-1 text-end d-flex flex-column align-items-end">
            <div>
              <button className="btn" onClick={() => resetForm()}>
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
        <div className="row pt-3">
          <div className="col-8">
            <h3 className="text-secondary" style={{ lineHeight: "40px" }}>
              Application
            </h3>
            <div className="border border-primary bg-white p-4 row">
              <div className="col-6">
                <label className="text-secondary fs-7 mt-3">
                  1. Consignor <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select form-select-sm mt-1"
                  value={formData?.consignorSelect ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "consignorSelect",
                      value: e.target.value,
                    })
                  }
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea
                  className="form-control form-control-sm mt-2"
                  value={formData?.consignorText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "consignorText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
                <label className="text-secondary fs-7 mt-3">
                  2. Consignee <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select form-select-sm mt-1"
                  value={formData?.consigneeSelect ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "consigneeSelect",
                      value: e.target.value,
                    })
                  }
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea
                  className="form-control form-control-sm mt-2"
                  value={formData?.consigneeText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "consigneeText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
                <label className="text-secondary fs-7 mt-3">
                  3. Transport details (optional)
                </label>
                <select
                  className="form-select form-select-sm mt-1"
                  value={formData?.transportSelect ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "transportSelect",
                      value: e.target.value,
                    })
                  }
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea
                  className="form-control form-control-sm mt-2"
                  value={formData?.transportText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "transportText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="col-6">
                <p className="text-secondary">CO Number</p>
                <label className="text-secondary fs-7 mt-3">
                  Consignor / Exporter invoice or reference number{" "}
                  <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control form-control-sm"
                  value={formData?.invoiceNumber ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "invoiceNumber",
                      value: e.target.value,
                    })
                  }
                />
                <label className="text-secondary fs-7 mt-3">
                  4. Country(ies) of origin{" "}
                  <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select form-select-sm mt-1"
                  value={formData?.countryOriginSelect ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "countryOriginSelect",
                      value: e.target.value,
                    })
                  }
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <textarea
                  className="form-control form-control-sm mt-2"
                  value={formData?.countryOriginText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "countryOriginText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
                <label className="text-secondary fs-7 mt-3">
                  5. Remarks (optional)
                </label>
                <textarea
                  className="form-control form-control-sm mt-2"
                  value={formData?.remarkText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "remarkText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
                <label className="text-secondary fs-7 mt-3">
                  6. Total shipment weight (specify net or gross) or measures{" "}
                  <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control form-control-sm mt-1"
                  value={formData?.shipmentWeight ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "shipmentWeight",
                      value: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="col-12">
                <label className="text-secondary fs-7 mt-3">
                  7. Item number, marks, number and kind of packages,
                  description of goods
                  <span className="text-danger">*</span>
                </label>
                <div className="d-flex align-items-center">
                  <select
                    className="form-select form-select-sm mt-1 w-50"
                    value={formData?.itemNumberSelect ?? ""}
                    onChange={(e) =>
                      handleFormDataChange({
                        key: "itemNumberSelect",
                        value: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label className="fs-7 text-secondary ms-1">
                    (Save and select Repetitive Text if desired)
                  </label>
                </div>
                <textarea
                  className="form-control form-control-sm mt-2"
                  rows="15"
                  value={formData?.itemNumberText ?? ""}
                  onChange={(e) =>
                    handleFormDataChange({
                      key: "itemNumberText",
                      value: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h4
              className="text-secondary text-end"
              style={{ lineHeight: "40px" }}
            >
              Partner company name
            </h4>
            <div className="border border-secondary py-2 px-3 bg-white">
              <p className="fs-7 m-0">
                <b>Submitted 03 March 2024 10:50 EDT by:</b>
                <br />
                John Smith
                <br />
                XYZ Corporation
                <br />
                United States of America
                <br />
                +1 212-000-0000
                <br />
                jsmith@xyzcorporation.com
                <br />
                <br />
                Company Registered 01 June 2022
                <br />
                Company Status: Gold member
              </p>
            </div>
            <div className="border border-primary py-2 px-3 bg-white mt-3">
              <p className="m-0">
                <b>PO Number for fees to Chamber</b> (optional)
              </p>
              <input
                className="form-control form-control-sm"
                value={formData?.poNumber ?? ""}
                onChange={(e) =>
                  handleFormDataChange({
                    key: "poNumber",
                    value: e.target.value,
                  })
                }
              />
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="saveForFuture"
                  checked={formData?.poNumberChecks?.includes("saveForFuture")}
                  onChange={(e) => handleCheckboxChange("poNumberChecks", e)}
                  id="saveForFuture"
                />
                <label className="mt-form-check-label" htmlFor="saveForFuture">
                  Save for future applications
                </label>
              </div>
            </div>
            <div className="border border-primary py-2 px-3 bg-white mt-3">
              <p className="m-0">
                <b>
                  Processing method <span className="text-danger">*</span>
                </b>
              </p>
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="returnCertifiedPdf"
                  id="returnCertifiedPdf"
                  checked={formData?.processingMethod?.includes(
                    "returnCertifiedPdf"
                  )}
                  onChange={(e) => handleCheckboxChange("processingMethod", e)}
                />
                <label
                  className="mt-form-check-label"
                  htmlFor="returnCertifiedPdf"
                >
                  Return Certified PDF to me electronically
                </label>
              </div>
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="chamberPrint"
                  id="chamberPrint"
                  checked={formData?.processingMethod?.includes("chamberPrint")}
                  onChange={(e) => handleCheckboxChange("processingMethod", e)}
                />
                <label className="mt-form-check-label" htmlFor="chamberPrint">
                  Chamber print, manually stamp/sign and ship
                </label>
              </div>
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="LegalizeAndShip"
                  id="LegalizeAndShip"
                  checked={formData?.processingMethod?.includes(
                    "LegalizeAndShip"
                  )}
                  onChange={(e) => handleCheckboxChange("processingMethod", e)}
                />
                <label
                  className="mt-form-check-label"
                  htmlFor="LegalizeAndShip"
                >
                  Legalize and ship
                </label>
              </div>
            </div>
            <div className="border border-primary py-2 px-3 bg-white mt-3">
              <p className="m-0">
                <b>Special instructions to Chamber</b> (optional)
              </p>
              <textarea
                className="form-control form-control-sm mt-2"
                value={formData?.specialInstructions ?? ""}
                onChange={(e) =>
                  handleFormDataChange({
                    key: "specialInstructions",
                    value: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <p className="text-center mt-1">
              <b>USD 50.00 – Fee on final approval</b>
            </p>
            <div className="d-flex justify-content-center gap-2">
              <button className="btn btn-warning">Save Draft</button>
              <button className="btn btn-warning">Email Draft</button>
              <button className="btn btn-success">Submit</button>
            </div>
            <div className="border border-secondary py-2 px-3 bg-white mt-3">
              <p className="text-secondary mb-5">
                <b>Comments from Chamber</b>
              </p>
            </div>
            <div className="border border-secondary py-2 px-3 bg-white mt-3">
              <p className="text-secondary m-0">
                <b>Audit trail</b>
              </p>
              <div className="row">
                <div className="col-6 fs-7 text-secondary">
                  Prepared: B. Exporter
                </div>
                <div className="col-6 fs-7 text-secondary text-end">
                  03 Mar 24 14:10 EST
                </div>
                <div className="col-6 fs-7 text-secondary">
                  Draft Saved: B Exporter
                </div>
                <div className="col-6 fs-7 text-secondary text-end">
                  03 Mar 24 14:15 EST
                </div>
                <div className="col-6 fs-7 text-secondary">
                  Draft Saved: B. Exporter
                </div>
                <div className="col-6 fs-7 text-secondary text-end">
                  03 Mar 24 14:20 EST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
