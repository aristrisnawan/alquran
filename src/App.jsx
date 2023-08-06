// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './component/Home';
import { DetailCard } from './component/DetailCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/ayat/:nomor" element={<DetailCard/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
