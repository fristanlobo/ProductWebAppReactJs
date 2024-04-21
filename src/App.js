import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Private from "./components/Private";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import UpdateProduct from "./components/UpdateProduct";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<Private />}>
            <Route
              path='/'
              element={<ProductList />}
            />
            <Route
              path='/add'
              element={<AddProduct />}
            />
            <Route
              path='/update/:id'
              element={<UpdateProduct />}
            />
            <Route
              path='/logout'
              element={<h1>logout component</h1>}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
          </Route>

          <Route
            path='/signup'
            element={<Signup />}
          />

          <Route
            path='/login'
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
