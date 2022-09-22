import { useState } from "react";
import axios from "axios";
import "./Details.css";
export const EntryDetails = ({ pros }) => {
  console.log(pros);

  const [adddata, setAdddata] = useState({
    role: "",
    company: "",
    location: "",
    description: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAdddata({ ...adddata, [name]: value });
  };
  console.log(adddata);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/details", { ...adddata })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        pros();
      });
  };

  return (
    <form
      className="details"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        Role:{" "}
        <input
          name="role"
          value={adddata.role}
          placeholder="Enter role"
          onChange={(e) => {
            handlechange(e);
          }}
          className="role"
          required="true"
        />
      </div>

      <div>
        Company:{" "}
        <input
          name="company"
          value={adddata.Phone}
          placeholder="Enter company"
          onChange={(e) => {
            handlechange(e);
          }}
          className="company"
          required="true"
        />
      </div>
      <div>
        Location:{" "}
        <input
          type="text"
          name="location"
          value={adddata.location}
          placeholder="Enter the Location"
          onChange={(e) => {
            handlechange(e);
          }}
          className="location"
          required="true"
        />
      </div>

      <div>
        Description:
        <input
          name="description"
          value={adddata.description}
          onChange={(e) => {
            handlechange(e);
          }}
        >
        </input>
      </div>

      <div>
        <input className="submit" type="submit" value="Submit" />
      </div>
    </form>
  );
};