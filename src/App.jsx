import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8002/api/blogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(blogs);

  const confirmDelete = (slug) => {
    Swal.fire({
      title: "Do you confirm to remove this blog?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      // if confirm
      if (result.isConfirmed) {
        deleteBlog(slug);
      }
    });
  };

  const deleteBlog = (slug) => {
    axios
      .delete(`http://localhost:8002/api/blog/${slug}`)
      .then((res) => {
        Swal.fire("Deleted!", res.data.message, "success");
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container p-5">
      <Navbar />
      {blogs.map((data, index) => {
        return (
          <div
            className="row"
            key={index}
            style={{ borderBottom: "1px solid silver" }}
          >
            <div className="col pt-3 pb-2">
              <Link to={`/blog/${data.slug}`}>
                <h2>{data.title}</h2>
              </Link>
              <p>{data.content.substring(0, 180)} . . .</p>
              <p className="text-muted">
                <br />
                <b>Author :</b> <i>{data.author}</i> , <b>Created :</b>{" "}
                <i>{new Date(data.createdAt).toLocaleString()}</i>
              </p>
              <Link
                className="btn btn-outline-success me-2 mb-2"
                to={`/blog/edit/${data.slug}`}
              >
                Edit
              </Link>
              <button
                className="btn btn-outline-danger mb-2"
                onClick={() => confirmDelete(data.slug)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
