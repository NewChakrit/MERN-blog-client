import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container p-5">
      <Navbar />
      <h1>MERN workshop</h1>
      <button className="btn btn-primary" href="/create">
        Start writing articles
      </button>
    </div>
  );
}

export default App;
