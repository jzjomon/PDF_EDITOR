import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import View from './pages/View';


const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/view/:name' element={<View />} />
        </Routes>
    </Router>
  )
}

export default App;