import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Page2News from "./pages/Page2News";
import Volunteer from "./components/pages/Volunteer";
import Page3CanHelp from "./pages/Page3CanHelp";
import Page4NeedHelp from "./pages/Page4NeedHelp";
import Page5Team from "./pages/Page5Team";
import Login from "./authorisation/Login";
import Register from "./authorisation/Register";
import Reset from "./authorisation/Reset";
import Dashboard from "./authorisation/Dashboard";
import MyCookie from "./components/MyCookie";
import posthog from "posthog-js";
import Donate from "./components/pages/Donate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Page2News" element={<Page2News />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Page3CanHelp" element={<Page3CanHelp />} />
        <Route path="/Page4NeedHelp" element={<Page4NeedHelp />} />
        <Route path="/Page5Team" element={<Page5Team />} />
      </Routes>

      {posthog.has_opted_out_capturing() || // new
      posthog.has_opted_in_capturing() ? null : (
        <MyCookie />
      )}
    </div>
  );
};

export default App;
