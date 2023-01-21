import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExpenseApp from "../ExpenseTracker/ExpenseApp";
import StyledApp from "../StyledProject/StyledApp";
import UserApp from "../UserProject/UserApp";
import LoginHomeApp from "../LoginHomeProject/LoginHomeApp";
import Dashboard from "../Dashboard/Dashboard";

function RoutePaths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expense-tracker" element={<ExpenseApp />} />
        <Route path="/styled-project" element={<StyledApp />} />
        <Route path="/add-user-age" element={<UserApp />} />
        <Route path="/login-home-project" element={<LoginHomeApp />} />
      </Routes>
    </Router>
  );
}

export default RoutePaths;
