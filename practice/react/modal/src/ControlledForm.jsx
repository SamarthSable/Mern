import React, { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div>
      <form>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={(e) => handleForm(e)}
        />
        <label>age</label>
        <input
          name="age"
          value={formData.age}
          onChange={(e) => handleForm(e)}
        />
        <label>email</label>
        <input
          name="email"
          value={formData.email}
          onChange={(e) => handleForm(e)}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}
