import React, { useState } from 'react';

const Form = ({ onSubmit, }) => {

      const [user, setUser] = useState({
            name: '',
            age: '',
            address: '',
            image: ''
      });


      const handleChange = () => {
            const { name, value } = e.target;
            setUser(prve => ({ ...prve, [name]: value }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(user);
            setUser({ name: '', age: '', address: '', image: '' });

      }



      return (
            <div className='text p-4 xl:mx-auto '>



                  <form action="" onClick={handleSubmit} className='flex flex-col justify-center items-center col-auto text-left gap-4'>

                        <input type="text"
                              name='name'
                              value={user.name}
                              placeholder='Name'
                              className='border  w-[300px] p-2 rounded-md'
                              onChange={handleChange} />

                        <input type="text"
                              name='age'
                              value={user.age}
                              placeholder='Age'
                              className='border w-[300px] p-2 rounded-md'
                              onChange={handleChange} />

                        <input type="text"
                              name='address'
                              value={user.address}
                              placeholder='Address'
                              className='border p-2 w-[300px] rounded-md'
                              onChange={handleChange} />

                        <div className='w-[300px] h-[100px] flex align-middle justify-center items-center cursor-pointer text-blue-500 rounded p-3 bg-gray-300'>

                              + Add image
                        </div>

                        <button className='p-3 w-[300px] bg-blue-500 rounded-md text-white'>Submit</button>

                  </form>
            </div>
      );
}

export default Form;
