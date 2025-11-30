import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CityList from './components/CityList';
import CityPage from './components/CityPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CityList/>} />
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/city/:slug" element={<CityPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
