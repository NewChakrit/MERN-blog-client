import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SingleBlog = (props) => {
  const [blog, setBlog] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8002/api/blog/${props.match.params.slug}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container p-5">
      <Navbar />
      <br />
      <h1>{blog.title}</h1>
      <br />
      <p>{blog.content}</p>
      <p>{blog.content}</p>
      <p className="text-muted">
        <br />
        <b>Author :</b> <i>{blog.author}</i> , <b>Created :</b>{" "}
        <i>{new Date(blog.createdAt).toLocaleString()}</i>
      </p>
    </div>
  );
};

export default SingleBlog;
