import React, { use } from 'react';
import { Link } from 'react-router-dom';

const ToodoData = ({fetchData}) => {
    const todos=use(fetchData)
    return (
        <div className='grid grid-cols-3 gap-3 px-4 mt-5'>
        {
            todos.map(todo => (
                <div className="card  bg-base-100 card-lg shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">{todo.title}</h2>
                        <p>Task: {todo.completed===true?'Completed':'Incomplete'}</p>
                        <div className="justify-end card-actions">
                          <Link to={`/todo/${todo.id}`}> <button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default ToodoData;