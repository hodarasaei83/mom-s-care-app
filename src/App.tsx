import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthorizedLayout from "./components/layout/authorizedLayout"
import LoginPage from "./components/login/loginPage"
import DashboardPage from "./components/dashboard/dashboardPage"
import NotFoundPage from "./components/layout/notFoundPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthorizedLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
