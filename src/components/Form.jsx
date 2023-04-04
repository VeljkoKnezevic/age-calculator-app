/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import Arrow from "/assets/images/icon-arrow.svg";

const Form = ({ formData, setFormData, setCheckSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCheckSubmit(true);
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
        {/* <div className="error">{dayError}</div> */}
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
        {/* <div className="error">{monthError}</div */}
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
        {/* <div className="error">{yearError}</div> */}
      </label>
      <button className="form__button" type="submit">
        <img src={Arrow} alt="Arrow" />
      </button>
    </form>
  );
};

export default Form;
