
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Education from './Education'

const Documents = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            // Simulate an API call or form submission
            const isSuccessful = await submitDocuments();

            if (isSuccessful) {
                navigate('/success');
            } else {
                throw new Error('Submission failed');
            }
        } catch (err) {
            setError('An error occurred while submitting the documents. Please try again.');
        }
    };

    // Simulated function for document submission
    const submitDocuments = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success or failure
                Math.random() > 0.5 ? resolve(true) : reject(new Error('Submission failed'));
            }, 1000);
        });
    };

    return (
        <div className="Baground">
            <Education  />
            {error && <div className="error-message">{error}</div>}
            <div>
                <button className="Submited-1" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Documents;
