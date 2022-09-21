// import axios from "axios";
// import baseUrl from "../config";
import Layout from "./layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookContainer from "./book/BookContainer";
import Login from "./user/Login";
import { SnackbarProvider } from "notistack";
import Auth from "./Auth";
import Register from "./user/Register";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              exact
              path="/"
              element={
                <Auth>
                  <BookContainer />
                </Auth>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
