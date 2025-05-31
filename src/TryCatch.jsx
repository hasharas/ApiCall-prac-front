// import axios from 'axios';
// import { useState, useEffect } from 'react';

// const Fetch = () => {
//       const [values, setValues] = useState([]);

//       const fethData = async () => {
//             try {
//                   const responce = await axios.get('https://openlibrary.org/search.json?q=harry+potter');
//                   console.log("you fetch datas", responce.data.docs);
//                   setValues(responce.data.docs);
//             } catch (error) {
//                   console.error("fetch error", error);
//             }
//       };

//       useEffect(() => {
//             fethData();
//       }, []);

//       return (
//             <div>
//                   <span>names...</span>
//                   <div>
//                         {values.map((book) => (
//                               <div key={book.key}>
//                                     <span>{book.title}</span>
//                               </div>
//                         ))}
//                   </div>
//             </div>
//       );
// };

// export default Fetch;
