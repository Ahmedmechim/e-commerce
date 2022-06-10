import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DiscreptionPage from "./pages/DiscreptionPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import AddProductPage from "./pages/AddProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/discreption/:id" element={<DiscreptionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/shoppingCart" element={<ShoppingCartPage />} />
          <Route path="/addProuduct" element={<AddProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
