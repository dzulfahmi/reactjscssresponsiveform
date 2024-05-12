import { useState } from 'react';
import logo from './logo.svg';
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validate()
    setErrors(error);

    if (Object.keys(error).length === 0) {
      alert("Done");
    }
  }

  const validate = () => {
    const error = {};

    if (!name) error.name = "Name is required"
    else error.name = ""
    
    if (!email) error.email = "Email is required"
    else if (/\S+@\S+\.\S+/.test(email)) error.email = "Email not matched"
    else error.email = ""

    if (!phone) error.phone = "Phone is required"
    else error.name = ""

    return error;
  }

  return (
    <div className="container">
      <div className='form_container'>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Nama</label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
            {errors.name && <div className='text_error'>{errors.name}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <div className='text_error'>{errors.email}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>No HP</label>
            <input type='number' onChange={(e) => setPhone(e.target.value)} />
            {errors.phone && <div className='text_error'>{errors.phone}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='gender'>Jenis Kelamin</label>
            <input type='text' onChange={(e) => setGender(e.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='address'>Alamat</label>
            <input type='text' onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button>Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
