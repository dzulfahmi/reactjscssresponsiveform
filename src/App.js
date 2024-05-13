import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contact';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactPage />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
