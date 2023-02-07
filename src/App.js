import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Page2News from "./pages/Page2News";
import Volunteer from "./components/pages/Volunteer";
import Page3CanHelp from "./pages/Page3CanHelp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Page2News" element={<Page2News />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Page3CanHelp" element={<Page3CanHelp />} />
      </Routes>
    </div>
  );
};

export default App;
