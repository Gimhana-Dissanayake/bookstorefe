// import axios from "axios";
// import baseUrl from "../config";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route exact path="/" element={<BookContainer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
