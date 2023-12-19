import { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    axios.get('/api/alumnos')
    .then(users => setUsers(users.data))
    .catch(err => console.log(err))
  },[])

 const listar = users.map(user => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.nombre}</td>
      <td>{user.dni}</td>
       <td>{user.libreta ? 'Ok' : '!Ok'}</td>
    </tr>
  ));
        
  return (
    <div className="w-100 vh-100 justify-content-center align-items-center">
      <div className='w-50'>
     <table  className='table'>
      <thead>
        <tr>
          <th>ID</th>
           <th>Nombre</th>
           <th> Dni</th>
           <th>Libreta </th>
        </tr>
      </thead>
      <tbody>
      {
       listar
      }
      </tbody>
     </table>
     </div>
    </div>
  );
}

export default App;
