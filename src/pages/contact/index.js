import { useState } from 'react';
import InputWithTitle from '../../components/InputWithTitle';
import InputSelectWithTitle from '../../components/InputSelectWithTitle';

function ContactPage() {
  const [name, setName] = useState('');
  const [birthplace, setBirthPlace] = useState('');
  const [birthdate, setBirthDate] = useState('');
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
            title={'Birthplace'}
            onChange={(e) => setBirthPlace(e.target.value)}
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
          <button>Daftar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
