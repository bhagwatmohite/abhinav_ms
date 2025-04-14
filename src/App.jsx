
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import HomeLayoute from './Layoutes/HomeLayoute';


function App() {

  return (
    <>
      {/* <Home></Home>
      <AboutUs></AboutUs> */}
      <Router>
        <Routes>
          <Route element={<HomeLayoute />} >
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
