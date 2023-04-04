/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import Arrow from "/assets/images/icon-arrow.svg";

const Form = ({ formData, setFormData, setCheckSubmit }) => {
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Day
    if (formData.day === "" || formData.day === null) {
      setDayError("This field is required");
    } else if (formData.day < 1 || formData.day > 31) {
      setDayError("Must be a valid day");
    } else {
      setDayError("");
    }

    if (formData.month === "" || formData.month === null) {
      setMonthError("This field is required");
    } else if (formData.month < 1 || formData.month > 12) {
      setMonthError("Must be a valid month");
    } else {
      setMonthError("");
    }

    if (formData.year === "" || formData.year === null) {
      setYearError("This field is required");
    } else if (formData.year > new Date().getFullYear()) {
      setYearError("Must be in the past");
    } else {
      setYearError("");
    }

    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (
      formData.year % 400 === 0 ||
      (formData.year % 100 !== 0 && formData.year % 4 === 0)
    )
      monthLength[1] = 29;

    if (formData.day >= monthLength[formData.month - 1]) {
      setDayError("Must be a valid date");
      setMonthError("");
      setYearError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__label" htmlFor="day">
        Day
        <input
          className="form__input"
          placeholder="DD"
          type="number"
          id="day"
          name="day"
          onChange={(e) => handleChange(e)}
          value={formData.day}
        />
        <div className="error">{dayError}</div>
      </label>
      <label className="form__label" htmlFor="month">
        Month
        <input
          className="form__input"
          placeholder="MM"
          type="number"
          id="month"
          name="month"
          onChange={(e) => handleChange(e)}
          value={formData.month}
        />
        <div className="error">{monthError}</div>
      </label>
      <label className="form__label" htmlFor="year">
        Year
        <input
          className="form__input"
          placeholder="YYYY"
          type="number"
          id="year"
          name="year"
          onChange={(e) => handleChange(e)}
          value={formData.year}
        />
        <div className="error">{yearError}</div>
      </label>
      <button className="form__button" type="submit">
        <img src={Arrow} alt="Arrow" />
      </button>
    </form>
  );
};

export default Form;
