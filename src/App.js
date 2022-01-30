import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./components/Login";
import Home from "./components/Home";
import { data } from "./constants/data";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
