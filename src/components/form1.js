// import React from "react";
import { React, useState } from "react";

const Form1 = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.phone && person.message) {
      console.log(person);
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", phone: "", message: "" });
    } else window.alert("please fill all form field");
  };

  return (
    <>
      <form className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3 px-3">
          <input
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={person.name}
            onChange={handleChange}
            className=" form-control"
          />
        </div>
        <div className="px-3 mb-3">
          <input
            type="email"
            placeholder="email"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
            className=" form-control "
          />
        </div>
        <div className="px-3 mb-3">
          <input
            type="text"
            placeholder="phone Number"
            id="phone"
            name="phone"
            value={person.phone}
            onChange={handleChange}
            className=" form-control "
          />
        </div>
        <div className="px-3 mb-3">
          <textarea
            type="text"
            placeholder="message"
            id="message"
            name="message"
            value={person.message}
            onChange={handleChange}
            className=" form-control "
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form1;
