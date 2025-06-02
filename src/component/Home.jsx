import React, { useState } from 'react'
import Form from './Form'
import axios from 'axios'

const Home = () => {

      const [users, setUsers] = useState([]);

      const handleSubmit = async (user) => {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
            setUsers([...users, { ...response.data, id: Date.now() }]);
      }


      return (
            <div>
                  <h1>Well Come Home</h1>
                  <div>
                        <Form onSubmit={handleSubmit} />
                  </div>
            </div>
      )
}

export default Home
