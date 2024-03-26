import React from "react";

export default function Contact() {
  return (
    <div style={{ width: "60%", margin: "auto" }} className="">
      <div className="pt-3 ">
        <div title="conatct section" customcolor="#2c3e50">
          <div className="text-center pt-4" style={{ color: "withe" }}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white ">
              conatct section
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div
                className="line me-3"
                style={{
                  backgroundColor: "white",
                  height: "5px",
                  width: "80px",
                }}
              />
              <i className="fa-solid fa-star text-white" />
              <div
                className="line ms-3"
                style={{
                  backgroundColor: "white",
                  height: "5px",
                  width: "80px",
                }}
              />
            </div>
          </div>
        </div>
        <input
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3"
        />

        <input
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3"
        />

        <input
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3"
        />

        <input
          id="userPassword"
          type="text"
          placeholder="userPassword"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched mb-3"
        />
        <button
          className="btn mt-4 text-white mb-3"
          style={{ backgroundColor: "#1abc9c" }}
        >
          {" "}
          send Message{" "}
        </button>
      </div>
    </div>
  );
}
