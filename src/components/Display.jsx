import React from "react";
import { intervalToDuration } from "date-fns";

const Display = ({ formData, checkSubmit }) => {
  const inputDate = new Date(formData.year, formData.month, formData.day);

  const displayDate = intervalToDuration({
    start: inputDate,
    end: new Date(),
  });

  return (
    <div className="display">
      <p className="display__text">
        <span>{checkSubmit ? displayDate.years : "--"}</span> years
      </p>
      <p className="display__text">
        <span>{checkSubmit ? displayDate.months : "--"}</span> months
      </p>
      <p className="display__text">
        <span>{checkSubmit ? displayDate.days : "--"}</span> days
      </p>
    </div>
  );
};

export default Display;
