import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import { UserProvider } from './context/UserContext/UserState';

function App() {
  return (
    <>
     <div className="App">
      <UserProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </BrowserRouter>
      </UserProvider>
    </div>
    </>
  )
}

export default App
