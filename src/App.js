import { Routes, Route, Link } from "react-router-dom";
import TitleA from "./component/TitleA";
import TitleB from "./component/TitleB";
import TitleC from "./component/TitleC"

function App() {
  return (
    <div>
      <div className="App">
        <nav>
          <Link to = "/">A</Link>
          <Link to = "/b">B</Link>
          <Link to = "/c">C</Link>
        </nav>
      </div>

        <div className = "routes">
          <Routes>
            <Route path = "/" element = {<TitleA />}/>
            <Route path = "/b" element = {<TitleB />} />
            <Route path = "/c" element = {<TitleC />} />
          </Routes>
        </div>  
    </div>
  );
}

export default App;
