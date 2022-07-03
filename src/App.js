import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './componants/Navbar';
import Home from './pages/Home';
import Footer from './componants/Footer'
import ExerciceDetail from './pages/ExerciceDetail';
function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width: {xl : '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/exercise/:id" element={<ExerciceDetail/>}/>
        </Routes>
        <Footer/>
      </Box>
      
    </div>
  );
}

export default App;
