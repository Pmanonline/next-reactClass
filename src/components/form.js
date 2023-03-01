import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const ContactForm = () => {
  const [person, setPerson] = useState({
    name: "",
    email: "",
    message: "",
    pricingOption: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.message && person.pricingOption) {
      console.log(person);
      const newPerson = { ...person };
      setPeople([...people, newPerson]);
      setPerson({ name: "", email: "", message: "", pricingOption: "" });
    } else window.alert("please fill all field");
  };
  return (
    <>
      <div className="col-lg-7 col-md-7 col-sm-12 mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-3 formstyle">
          <div className={`mb-3`}>
            <p className={``}>Name:</p>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
              className="form-control inputstyle"
            />
          </div>

          <div className={`mb-3`}>
            <p className={``}>Email:</p>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              className="form-control inputstyle"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect">Pricing Option</label>
            <select
              type="text"
              id="pricingOption"
              name="pricingOption"
              value={person.pricingOption}
              onChange={handleChange}
              className="form-control inputstyle"
            >
              <option value="Classic">Classic</option>
              <option value="Advanced">Advanced</option>
              <option value="Premium">Premium</option>
            </select>
          </div>
          <div className="mb-3">
            <p>Message:</p>
            <textarea
              type="text"
              id="message"
              name="message"
              value={person.message}
              onChange={handleChange}
              className="form-control"
              placeholder="Message"
              rows={3}
            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-success d-flex align-item-center mx-auto mt-2"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
ContactForm.propTypes = {};

export default ContactForm;
