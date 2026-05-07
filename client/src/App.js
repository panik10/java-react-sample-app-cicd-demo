import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import AuthorizationCodeCallback from './components/AuthorizationCodeCallback';
import Contacts from "./pages/Contacts";
import VanillaDream from "./pages/VanillaDream";
import ChocolateIndulgence from "./pages/ChocolateIndulgence";
import StrawberryBliss from "./pages/StrawberryBliss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/vanilla-dream" element={<VanillaDream />} />
          <Route path="/chocolate-indulgence" element={<ChocolateIndulgence />} />
          <Route path="/strawberry-bliss" element={<StrawberryBliss />} />
          <Route path="/authorization-code/callback" element={<AuthorizationCodeCallback />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;