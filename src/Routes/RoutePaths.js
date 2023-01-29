import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpenseApp from "../ExpenseTracker/ExpenseApp";
import StyledApp from "../StyledProject/StyledApp";
import UserApp from "../UserProject/UserApp";
import LoginHomeApp from "../LoginHomeProject/LoginHomeApp";
import Dashboard from "../Dashboard/Dashboard";
import LoginApp from "../Assignment-1/LoginApp";
import LoginForm from "../Assignment-1/Pages/LoginForm";
import SignupForm from "../Assignment-1/Pages/SignupForm";
import LandingPage from "../Assignment-1/Pages/LandingPage";

function RoutePaths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expense-tracker" element={<ExpenseApp />} />
        <Route path="/styled-project" element={<StyledApp />} />
        <Route path="/add-user-age" element={<UserApp />} />
        <Route path="/login-home-project" element={<LoginHomeApp />} />
        <Route path="/assignment-1" element={<LoginApp />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default RoutePaths;
