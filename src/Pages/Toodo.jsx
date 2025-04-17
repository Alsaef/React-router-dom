import React, { Suspense } from 'react';
import ToodoData from '../Components/ToodoData';

const fetchData=fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json())
const Users = () => {
    return (
        <div>
             <h2 className=' text-3xl text-center font-bold py-3.5'>Todos</h2>
            <Suspense fallback={<h2 className='text-xl text-center text-blue-600'>Loading.......</h2>}>
                <ToodoData fetchData={fetchData}></ToodoData>
            </Suspense>
        </div>
    );
};

export default Users;