


// import axios from "axios";
// import baseUrl from "../config";
import Layout from './layout/Layout'
import BookContainer from "./book/BookContainer";

function App() {
  // axios(`${baseUrl}/api/v1/books`).then((books) => {
  //   console.log(books);
  // });

  return (
    <Layout>
      <BookContainer/>
    </Layout>
  );
}

export default App;
