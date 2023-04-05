import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./styles/styles.scss";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <main>
      <h1 className="visuallyhidden">Age calculator</h1>
      <Form onSubmit={handleSubmit} />
      <Display formData={formData} />
    </main>
  );
};

export default App;
