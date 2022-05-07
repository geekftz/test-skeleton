import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import Test1 from "./pages/Test1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/react-content-loader">react-content-loader</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/react-content-loader" element={<Test1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
