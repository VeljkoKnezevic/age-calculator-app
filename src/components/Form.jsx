/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import { useState } from "react";
import Arrow from "/assets/images/icon-arrow.svg";

const Form = ({ onSubmit }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // day check
    if (!day) {
      setDayError("This field is required");
      form.children[0].classList.add("form__label__error");
    } else if (day < 1 || day > 31) {
      setDayError("Must be a valid day");
      form.children[0].classList.add("form__label__error");
    } else {
      setDayError("");
      form.children[0].classList.remove("form__label__error");
    }

    // month check
    if (!month) {
      setMonthError("This field is required");
      form.children[1].classList.add("form__label__error");
    } else if (month < 1 || month > 12) {
      setMonthError("Must be a valid month");
      form.children[1].classList.add("form__label__error");
    } else {
      setMonthError("");
      form.children[1].classList.remove("form__label__error");
    }

    // year check
    if (!year) {
      setYearError("This field is required");
      form.children[2].classList.add("form__label__error");
    } else if (year > new Date().getFullYear()) {
      setYearError("Must be in the past");
      form.children[2].classList.add("form__label__error");
    } else {
      form.children[2].classList.remove("form__label__error");

      setYearError("");
    }

    // valid date check
    const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
      monthLength[1] = 29;

    if (day > monthLength[month - 1]) {
      setDayError("Must be a valid date");
      setMonthError("");
      setYearError("");
      form.children[0].classList.add("form__label__error");
      form.children[1].classList.add("form__label__error");
      form.children[2].classList.add("form__label__error");
    }

    if (
      !day ||
      !month ||
      !year ||
      day > monthLength[month - 1] ||
      year > new Date().getFullYear() ||
      month < 1 ||
      month > 12 ||
      day < 1 ||
      day > 31
    ) {
      onSubmit({});
    } else {
      onSubmit({ year, month, day });
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
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
        {dayError && <div className="error-msg">{dayError}</div>}
      </label>
      <label className="form__label" htmlFor="month">
        Month
        <input
          className="form__input"
          placeholder="MM"
          type="number"
          id="month"
          name="month"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
        />
        {monthError && <div className="error-msg">{monthError}</div>}
      </label>
      <label className="form__label" htmlFor="year">
        Year
        <input
          className="form__input"
          placeholder="YYYY"
          type="number"
          id="year"
          name="year"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        {yearError && <div className="error-msg">{yearError}</div>}
      </label>
      <button className="form__button" type="submit">
        <img src={Arrow} alt="Arrow" />
      </button>
    </form>
  );
};

export default Form;
