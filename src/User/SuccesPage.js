// SuccessPage.js
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccesPage = () => {
    const navigate = useNavigate();

    const handleBackToMain = () => {
        navigate('/');
    };

    return (
        <div className='Success-page'>
          <div className='Thumb-Hand'>
            <FontAwesomeIcon icon={faThumbsUp} /> 
          </div>
            <p>All Documents successfully Submited...!</p>
           <a  href='#'className='close-1' onClick={handleBackToMain}>&times;</a>
        </div>
    );
};

export default SuccesPage;

