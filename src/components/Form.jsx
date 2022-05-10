import React, { useState } from "react";
import Navbar from "./Navbar";

const Form = () => {
  const [state, setState] = useState({ title: "", content: "", authoe: "" });

  const { title, content, author } = state;

  const inputValue = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  // console.log(title, content, author);
  return (
    <div className="container p-5">
      <Navbar />
      <h1>Articles</h1>
      <form action="">
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
          <textarea
            className="form-control"
            value={content}
            onChange={inputValue("content")}
          />
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
