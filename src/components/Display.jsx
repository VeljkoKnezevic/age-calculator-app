import React, { useEffect, useState } from "react";
import { intervalToDuration } from "date-fns";

const Display = ({ formData }) => {
  const [displayDate, setDisplayDate] = useState({});
  const [check, setCheck] = useState(false);

  const updateDisplayDate = () => {
    setDisplayDate(
      intervalToDuration({
        start: new Date(formData.year, formData.month - 1, formData.day),
        end: new Date(),
      })
    );
  };

  useEffect(() => {
    if (Object.keys(formData).length === 3) {
      updateDisplayDate();
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [formData]);

  return (
    <div className="display">
      <p className="display__text">
        <span>{check ? displayDate.years : "--"}</span> years
      </p>
      <p className="display__text">
        <span>{check ? displayDate.months : "--"}</span> months
      </p>
      <p className="display__text">
        <span>{check ? displayDate.days : "--"}</span> days
      </p>
    </div>
  );
};

export default Display;
