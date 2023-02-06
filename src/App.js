import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Page2News from "./pages/Page2News";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Page2News" element={<Page2News />} />
      </Routes>
    </div>
  );
};

export default App;
