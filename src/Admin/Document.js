import React from 'react';
import { useNavigate } from 'react-router';
import Education from './Education';

const Document =()=>
{
    const navigate = useNavigate(); // Use navigate instead of history

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        console.log('Logged out and redirecting to home page.');
        navigate('/'); // Use navigate instead of history.push
      };

    return(<>
               <nav>
                <div className='navbar'>
                    <button className='Logout' onClick={handleLogout}>Logout</button>
                </div>
                    <div>
                        <Education />
                    </div>
               </nav>
    </>)
}
export default Document;