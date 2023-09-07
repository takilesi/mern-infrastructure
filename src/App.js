import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// pages
import AuthPage from './pages/AuthPage/AuthPage'
import NewOrderPage from './pages/NewOrderPage/NewOrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage'
// components
import NavBar from './components/NavBar/NavBar'
// css
import './App.css';
import { getUser } from "./utilities/users-service";
import CreateSong from './components/CreateSong/CreateSong'


function App() {
  // array destructuring
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          {/* <Route path="/orders/new" element={<NewOrderPage />} /> */}
           {/* song - url route , element is what renders */}
          <Route path="/song" element={<NewOrderPage />} />
          <Route path="/orders/history" element={<OrderHistoryPage />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;