import './App.css';
import contacts from "./contacts.json"
import { useState } from 'react';
const getFiveArr = contacts.splice(0, 5)

function App() {
const [contacts, setContacts] = useState(getFiveArr)

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    width="100px"
                    height="120px"
                    alt="Actor"
                  />
                </td>
                <td> {contact.name} </td>
                <td> {contact.popularity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
