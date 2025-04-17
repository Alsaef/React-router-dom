import React, { Suspense } from 'react';
import PostData from './Components/PostData';


const fetchData=fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
const App = () => {
  return (
    <div>
       <h2 className=' text-3xl text-center font-bold py-3.5'>Our Post</h2>
     <Suspense fallback={<h2 className='text-xl text-center text-blue-600'>Loading.......</h2>}>
     <PostData fetchData={fetchData} ></PostData> 
     </Suspense>
      
    </div>
  );
};

export default App;