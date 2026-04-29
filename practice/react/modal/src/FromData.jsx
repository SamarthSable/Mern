import React, { useState } from "react";

export default function FromData() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
  });

  function handleData(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column gap-3 p-4 border"
      >
        <div className="w-100">
          <label htmlFor="name" className="d-block text-start">
            Enter Your Name
          </label>
          <input
            id="name"
            name="name"
            className="form-control mx-auto w-50"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={handleData}
          />
        </div>

        <div className="w-100">
          <label htmlFor="email" className="d-block text-start">
            Enter Your Email
          </label>
          <input
            id="email"
            name="email"
            className="form-control mx-auto w-50"
            placeholder="Enter Your Email"
            value={data.email}
            onChange={handleData}
          />
        </div>

        <div className="w-100">
          <label htmlFor="age" className="d-block text-start">
            Enter Your Age
          </label>
          <input
            id="age"
            name="age"
            className="form-control mx-auto w-50"
            placeholder="Enter Your Age"
            value={data.age}
            onChange={handleData}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
