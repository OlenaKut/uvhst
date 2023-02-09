import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Page2News from "./pages/Page2News";
import Volunteer from "./components/pages/Volunteer";
import Page3CanHelp from "./pages/Page3CanHelp";
import Page4NeedHelp from "./pages/Page4NeedHelp";
import Page5Team from "./pages/Page5Team";
import MyCookie from "./components/MyCookie";
import posthog from "posthog-js";
import Login from "../src/authorisation/Login";
import Register from "../src/authorisation/Register";
import Reset from "../src/authorisation/Reset";
import Dashboard from "../src/authorisation/Dashboard";

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
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>

      {posthog.has_opted_out_capturing() || // new
      posthog.has_opted_in_capturing() ? null : (
        <MyCookie />
      )}
    </div>
  );
};

export default App;
