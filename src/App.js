import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './pages/contact';
import ContactList from './pages/contact/list';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContactList />}></Route> 
        <Route path='/addcontact' element={<ContactPage />}></Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
