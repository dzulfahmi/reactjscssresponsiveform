import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5500/api/contact').then(res => {
      console.log('isi res', res);
      setData(res.data.data.items || [])
    }).catch(err => console.log('isi err', err))
  }, [])

  return (
    <div className="container">
      <div className="list-container">
        <h2>Contact List</h2>
        <div className="add-button-container">
          <Link to={'/addcontact'}><button className="add-button">Add Contact</button></Link>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, ind) => (
                <tr key={row.id}>
                  <td>{ind+1}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ContactList;