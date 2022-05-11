import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import Wrapper from "./Quill";

const Form = () => {
  const [state, setState] = useState({ title: "", authoe: "" });
  const [content, setContent] = useState("");

  const { title, author } = state;

  const inputValue = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  // console.log(title, content, author);

  const submitContent = (e) => {
    setContent(e);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log("API = ", process.env.REACT_APP_API);
    axios
      .post(`http://localhost:8002/api/create`, {
        title,
        content,
        author,
      })
      .then((res) => {
        Swal.fire("Great job!", "Submit Success", "success");
        setState({ ...state, title: "", content: "", author: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.error}!`,
        });
      });
  };

  return (
    <div className="container p-5">
      <Navbar />
      <h1>Article</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <Wrapper />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
