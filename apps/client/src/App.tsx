import { Route, Routes } from "react-router-dom"
import { AccountPage } from "./pages/AccountPage/AccountPage"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { MainPage } from "./pages/MainPage/MainPage"
import { RegisterPage } from "./pages/RegisterPage/RegisterPage"

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/account" element={<AccountPage />}/>
      </Routes>
    </div>
  )
}

export default App
