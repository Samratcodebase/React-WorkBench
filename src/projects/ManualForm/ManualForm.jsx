import { useState } from "react";
import "./ManualForm.css";
const ManualForm = () => {
  const [Values, setValues] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [Submited, setSubmited] = useState(false);
  function setFields(Field) {
    return (e) => {
      console.log(`[${Field}]: ${e.target.value} `);

      setValues((Values) => {
        return {
          ...Values,
          [Field]: e.target.value,
        };
      });
    };
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("A network call to the server with data");

    console.log(`
     Name: ${Values.name} 
     Email:${Values.email}
     Role :${Values.role}
     `);

    setValues(() => {
      return {
        name: "",
        email: "",
        role: "",
      };
    });

    setSubmited(true);
  };

  if (Submited) {
    return (
      <div className="success-message">
        <h1>Form Submission SucessFull</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <form onSubmit={HandleSubmit}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={Values.email}
              onChange={setFields("email")}
            />
          </label>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={Values.name}
              onChange={setFields("name")}
            />
          </label>
          <label htmlFor="role">
            Role:
            <input
              type="text"
              id="role"
              value={Values.role}
              onChange={setFields("role")}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default ManualForm;
