import { useState } from 'react';
import InputWithTitle from '../../components/InputWithTitle';
import InputSelectWithTitle from '../../components/InputSelectWithTitle';
import axios from 'axios';
import Alert from '../../components/Alert';

function ContactPage() {
  const [name, setName] = useState('');
  const [birthplace, setBirthPlace] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState([]);
  const [alert, setAlert] = useState({type: '', message: ''});

  const resetForm = () => {
    setName('');
    setBirthPlace('');
    setBirthDate('');
    setEmail('');
    setPhone('');
    setGender('');
    setAddress('');
  }

  const handleAlert = (type, message) => {
    setAlert({ type, message });
  };

  const clearAlert = () => {
    setAlert({type: '', message: ''});
    resetForm()
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validate()
    setErrors(error);

    console.log('isi error', error);

    if (Object.keys(error).length === 0) {
      let payload = {
        name, birthdate, birthplace, email, phone, gender, address
      }
      console.log('isi payload', payload);
      axios.post('http://localhost:5500/api/contact', payload).then(res => {
        console.log('isi res', res)
        handleAlert('success', res.data.data.message || 'Data saved successfully')
      }).catch(err => {
        handleAlert('error', err.data.data.message || 'Some error occurred while creating the Contact')
      })
    }
  }

  const validate = () => {
    const error = {};

    if (!name) error.name = "Name is required"
    // else error.name = ""
    
    if (!email) error.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) error.email = "Email not matched"
    // else error.email = ""

    if (!phone) error.phone = "Phone is required"
    // else error.phone = ""

    return error;
  }

  return (
    <div className="container">
      <div className='form_container'>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <InputWithTitle
            id={'name'} 
            title={'Name'}
            onChange={(e) => setName(e.target.value)}
            errors={errors}
          />
          <InputWithTitle
            id={'birthplace'} 
            title={'Birth Place'}
            onChange={(e) => setBirthPlace(e.target.value)}
            errors={errors}
          />
          <InputWithTitle
            id={'birthdate'} 
            title={'Birth Date'}
            type='date'
            onChange={(e) => setBirthDate(e.target.value)}
            errors={errors}
          />
          <InputWithTitle
            id={'email'} 
            title={'Email'}
            type={'email'}
            onChange={(e) => setEmail(e.target.value)}
            errors={errors}
          />
          <InputWithTitle
            id={'phone'} 
            title={'Phone'}
            type={'number'}
            onChange={(e) => setPhone(e.target.value)}
            errors={errors}
          />
          <InputSelectWithTitle
            title={'Gender'}
            value={gender}
            data={[
              {value: 'male', label: 'Male'},
              {value: 'female', label: 'Female'},
            ]}
            onChange={(e) => setGender(e.target.value)}
            errors={errors}
          />
          <InputWithTitle
            id={'address'} 
            title={'Address'}
            type={'text'}
            onChange={(e) => setAddress(e.target.value)}
            errors={errors}
          />
          <button>Submit</button>
        </form>
      </div>
      {alert && <Alert type={alert.type} message={alert.message} onClose={clearAlert} />}
    </div>
  );
}

export default ContactPage;
