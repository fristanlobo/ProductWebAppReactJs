import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path='/'
            element={<h1>Product listing component</h1>}
          />
          <Route
            path='/add'
            element={<h1>Product adding component</h1>}
          />
          <Route
            path='/update'
            element={<h1>Product updating component</h1>}
          />
          <Route
            path='/logout'
            element={<h1>logout component</h1>}
          />
          <Route
            path='/profile'
            element={<h1>Profile component</h1>}
          />
          <Route
            path='/signup'
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
