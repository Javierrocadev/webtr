// App.js
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Main from "./components/Main";
import {AuthContextProvider} from "./components/authContext"
//paginas
import Pag1 from "./components/Pag1";
import Pag2 from "./components/Pag2";
import Pag3 from "./components/Pag3";
import Pag4 from "./components/Pag4";
import Pag5 from "./components/Pag5";
import Login from "./components/Login";
localStorage.setItem("rol", 1);
localStorage.setItem("token", 5321236213612);

const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pag1" element={<Pag1 />} />
          <Route path="/pag2" element={<Pag2 />} />
          <Route path="/pag3" element={<Pag3 />} />
          <Route path="/pag4" element={<Pag4 />} />
          <Route path="/pag5" element={<Pag5 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
    </AuthContextProvider>
  );
};

export default App;
