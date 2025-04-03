import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
function App() {


  return (
    <>
      <Header />
      {/*Path for components*/}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/watchhistory' element={<Watchhistory/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
