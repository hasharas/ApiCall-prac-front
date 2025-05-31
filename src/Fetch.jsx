import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Fetch = () => {

      const [result, setResult] = useState([]);

      const [count, setCount] = useState(0);

      const handleClick = () => {
            setCount(count + 1);
      };

      // useEffect(() => {

      //       fetch('https://opentdb.com/api.php?amount=5')
      //             .then((res) => res.json())

      //             .then((data) => {
      //                   console.log('fetch data books', data);
      //                   setResult(data);
      //             }
      //             )

      //             .catch((error) => console.error('err msg is :', error))

      // }, []);


      useEffect(() => {
            fetch('api')
                  .then((res) => res.json())
                  .then((data) => {
                        console.log(data);
                  })

      }, [])



      return (
            <div>
                  <button onClick={handleClick}>Click me</button>
                  <br /><br />
                  <span>{count}</span>
            </div>
      )
}

export default Fetch
