import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Page2News from "./pages/Page2News";
import Volunteer from "./components/pages/Volunteer";
import Page3CanHelp from "./pages/Page3CanHelp";
import Page4NeedHelp from "./pages/Page4NeedHelp";
import Page5Team from "./pages/Page5Team";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Page2News" element={<Page2News />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Page3CanHelp" element={<Page3CanHelp />} />
        <Route path="/Page4NeedHelp" element={<Page4NeedHelp />} />
        <Route path="/Page5Team" element={<Page5Team />} />
      </Routes>
    </div>
  );
};

export default App;
