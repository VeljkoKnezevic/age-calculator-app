import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./styles/styles.scss";

const App = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [checkSubmit, setCheckSubmit] = useState(false);

  return (
    <main>
      <h1 className="visuallyhidden">Age calculator</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        setCheckSubmit={setCheckSubmit}
      />
      <Display formData={formData} checkSubmit={checkSubmit} />
    </main>
  );
};

export default App;
