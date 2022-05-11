import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";

const EditForm = (props) => {
  const [state, setState] = useState({
    title: "",
    content: "",
    authoe: "",
    slug: "",
  });

  const { title, content, author, slug } = state;

  const inputValue = (name) => (e) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8002/api/blog/${props.match.params.slug}`)
      .then((res) => {
        const { title, content, author, slug } = res.data;
        setState({ ...state, title, content, author, slug });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const showUpdateForm = () => {
    return (
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
        <input type="submit" value="Update" className="btn btn-primary" />
      </form>
    );
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8002/api/blog/${slug}`, {
        title,
        content,
        author,
      })
      .then((res) => {
        Swal.fire("Great job!", "Blog is updated", "success");
        const { title, content, author, slug } = res.data;
        setState({ ...state, title, author, content, slug });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="container p-5">
      <Navbar />
      <br />
      <h1>Edit Blog</h1>
      {showUpdateForm()}
    </div>
  );
};

export default EditForm;
