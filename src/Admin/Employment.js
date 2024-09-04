import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCaretDown, faFileArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';

const Employment = () => {
    // Download function for specific files
    const handleDownload = async (filePath, fileName) => {
        try {
            const response = await fetch(filePath);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName; // Specify the filename dynamically
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file:', error);
            alert('Failed to download the file. Please try again later.');
        }
    };

    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(prev => !prev);

    const [hide31, setHide31] = useState(false);
    const [hide32, setHide32] = useState(false);

    const [buttons, setButtons] = useState([]);

    const addButton = () => {
        if (buttons.length >= 3) return; // Limit to 3 sections
        const newButtonId = `section${buttons.length + 3}`;
        setButtons(prev => [...prev, newButtonId]);
    };

    // Remove a button by its index
    const removeButton = (index) => {
        setButtons(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <>
            <section>
                <div className="parent-3" onClick={handleShow3}>
                    Employment <p className="FontAwesomeIcon"><FontAwesomeIcon icon={faCaretDown} /></p>
                </div>
                {show3 && (
                    <div>
                        <div className="child-31" onClick={() => setHide31(!hide31)}>Current employer last 3 months payslips</div>
                        {hide31 && (
                            <div className="sub-child-31">
                                <div style={{ marginBottom: '20px' }}>
                                    <form>
                                        <div className="Download-here3">
                                            Download here <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
                                            <button
                                                className="Download-file"
                                                type="button"
                                                onClick={() => handleDownload('/path/to/current-address/file.pdf', 'current-address.pdf')}
                                            >
                                                <FontAwesomeIcon icon={faFileArrowDown} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="child-32" onClick={() => setHide32(!hide32)}>Previous employer Experience/Relieving letter</div>
                        {hide32 && (
                            <div className="sub-child-32">
                                <div style={{ marginBottom: '20px' }}>
                                    <form>
                                        <div className="Download-here3">
                                            Download here <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
                                            <button
                                                className="Download-file"
                                                type="button"
                                                onClick={() => handleDownload('/path/to/previous-employer/file.pdf', 'previous-employer.pdf')}
                                            >
                                                <FontAwesomeIcon icon={faFileArrowDown} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        <div className="child-33" onClick={addButton}>+ ADD Employer</div>

                        <div>
                            {buttons.map((buttonId, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <div className="child-32">
                                        Previous employer Experience/Relieving letter
                                    </div>
                                    <div className="sub-child-33">
                                        <form>
                                            <div className="Download-here3">
                                                Download here <FontAwesomeIcon icon={faArrowRightLong} className="arrow" />
                                                <button
                                                    className="Download-file"
                                                    type="button"
                                                    onClick={() => handleDownload('/path/to/added-employer/file.pdf', 'added-employer.pdf')}
                                                >
                                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                                </button>
                                            </div>
                                            
                                        </form>
                                        <button
                                            className="remove-button"
                                            onClick={() => removeButton(index)} >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Employment;
