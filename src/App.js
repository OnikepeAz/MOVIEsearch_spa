import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        < Route path="/" exact="true" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
