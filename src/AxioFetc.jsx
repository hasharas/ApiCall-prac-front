import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Fetch = () => {
      const [value, setValue] = useState([]);

      useEffect(() => {

            axios.get('https://opentdb.com/api.php?amount=5')
                  .then((responce) => {
                        console.log('you responce data', responce.data);
                        setValue(responce.data.results)
                  })
                  .catch((error) => console.error('your error', error.message));

      }, []);





      return (


            <div className=''>
                  {value.map((music, index) => (
                        <div key={index}>
                              <span>{music.category}</span>
                              <span>{music.correct_answer}</span>
                        </div>
                  ))

                  }
            </div>
      );
}






export default Fetch;
