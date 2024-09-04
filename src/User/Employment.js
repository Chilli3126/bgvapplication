import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTrash } from '@fortawesome/free-solid-svg-icons';

const Employment = () => {
    const [formValues, setFormValues] = useState({
        section1: { file: null, textArea: '' },
        section2: { file: null, textArea: '' },
    });

    const [messages, setMessages] = useState({
        section1: { file: '', textArea: '', general: '' },
        section2: { file: '', textArea: '', general: '' },
    });

    const [activeSection, setActiveSection] = useState('');

    const fileInputRefs = useRef({});

    const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes
    const ACCEPTED_FILE_TYPES = ['application/pdf'];

    const handleChange = (event, section) => {
        const { name, value, files } = event.target;
        const file = files ? files[0] : null;
        let newMessages = { file: '', textArea: '' };

        if (file) {
            if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                newMessages.file = 'Invalid file type. Please upload a PDF file only.';
            } else if (file.size > MAX_FILE_SIZE) {
                newMessages.file = 'File size exceeds the 2 MB limit.';
            }
        }

        if (name === 'textArea' && !value.trim()) {
            newMessages.textArea = 'Textarea is required.';
        }

        setFormValues(prevValues => ({
            ...prevValues,
            [section]: {
                ...prevValues[section],
                [name]: file || value
            }
        }));

        setMessages(prevMessages => ({
            ...prevMessages,
            [section]: { ...prevMessages[section], ...newMessages }
        }));
    };

    const handleSubmit = (event, section) => {
        if (event) event.preventDefault();

        let newMessages = {
            file: '',
            textArea: '',
            general: ''
        };

        if (!formValues[section]?.file) {
            newMessages.file = 'File input is required.';
        }
        if (!formValues[section]?.textArea.trim()) {
            newMessages.textArea = 'Textarea is required.';
        }

        if (newMessages.file || newMessages.textArea) {
            setMessages(prevMessages => ({
                ...prevMessages,
                [section]: newMessages
            }));
        } else {
            setMessages(prevMessages => ({
                ...prevMessages,
                [section]: { ...newMessages, general: 'Data Saved successfully!' }
            }));

            console.log('Employment data submitted for', section, ':', formValues[section]);

            setFormValues(prevValues => ({
                ...prevValues,
                [section]: { file: null, textArea: '' }
            }));

            if (fileInputRefs.current[section]) {
                fileInputRefs.current[section].value = '';
            }
        }

        setActiveSection(section);
    };

    const [show3, setShow3] = useState(false);
    const handleShow3 = () => setShow3(prev => !prev);

    const [hide31, setHide31] = useState(false);
    const [hide32, setHide32] = useState(false);

    const [buttons, setButtons] = useState([]);

    const addButton = () => {
        if (buttons.length >= 3) return;
        const newButtonId = `section${buttons.length + 3}`;
        setButtons([...buttons, newButtonId]);
        setFormValues(prevValues => ({
            ...prevValues,
            [newButtonId]: { file: null, textArea: '' }
        }));
        setMessages(prevMessages => ({
            ...prevMessages,
            [newButtonId]: { file: '', textArea: '', general: '' }
        }));
    };

    // Remove a button by its index
    const removeButton = (index) => {
        setButtons(buttons.filter((_, i) => i !== index));
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
                                {['section1'].map((section, index) => (
                                    <div key={index} style={{ marginBottom: '20px' }}>
                                        <form onSubmit={(e) => handleSubmit(e, section)}>
                                            <input
                                                type="file" name="file"
                                                ref={el => (fileInputRefs.current[section] = el)}
                                                onChange={(e) => handleChange(e, section)}
                                            />
                                            {messages[section]?.file && <p className="sub-file-error3">{messages[section].file}</p>}
                                            <textarea
                                                rows={2}  name="textArea"
                                                value={formValues[section]?.textArea || ''}
                                                onChange={(e) => handleChange(e, section)}
                                                placeholder="Comments"
                                            />
                                            {messages[section]?.textArea && <p className="sub-textarea-error3">{messages[section].textArea}</p>}
                                            <button className="button-3" type="submit">Save</button>
                                            {activeSection === section && messages[section]?.general && (
                                                <p className="sub-success-msg3" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                    {messages[section].general}
                                                </p>
                                            )}
                                        </form>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="child-32" onClick={() => setHide32(!hide32)}>Previous employer Experience/Relieving letter</div>
                        {hide32 && (
                            <div className="sub-child-32">
                                {['section2'].map((section, index) => (
                                    <div key={index} style={{ marginBottom: '20px' }}>
                                        <form onSubmit={(e) => handleSubmit(e, section)}>
                                        <input
                                                type="file" name="file"
                                                ref={el => (fileInputRefs.current[section] = el)}
                                                onChange={(e) => handleChange(e, section)}
                                            />
                                            {messages[section]?.file && <p className="sub-file-error3">{messages[section].file}</p>}
                                            <textarea
                                                rows={2} name="textArea"
                                                value={formValues[section]?.textArea || ''}
                                                onChange={(e) => handleChange(e, section)}
                                                placeholder="Comments"
                                            />
                                            {messages[section]?.textArea && <p className="sub-textarea-error3">{messages[section].textArea}</p>}
                                            <button className="button-3" type="submit">Save</button>
                                            {activeSection === section && messages[section]?.general && (
                                                <p className="sub-success-msg3" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                    {messages[section].general}
                                                </p>
                                            )}
                                        </form>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="child-33" onClick={addButton}>+ ADD Employer</div>

                        <div>
                            {buttons.map((buttonId, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <div className="child-32">Previous employer Experience/Relieving letter</div>
                                    <div className="sub-child-33">
                                        <form onSubmit={(e) => handleSubmit(e, buttonId)}>
                                            <input
                                                type="file" name="file"
                                                ref={el => (fileInputRefs.current[buttonId] = el)}
                                                onChange={(e) => handleChange(e, buttonId)}
                                            />
                                            {messages[buttonId]?.file && <p className="sub-file-error3">{messages[buttonId].file}</p>}
                                            <textarea
                                                rows={2}  name="textArea"
                                                value={formValues[buttonId]?.textArea || ''}
                                                onChange={(e) => handleChange(e, buttonId)}
                                                placeholder="Comments"
                                            />
                                            {messages[buttonId]?.textArea && <p className="sub-textarea-error3">{messages[buttonId].textArea}</p>}
                                            <button className="button-3" type="submit">Save</button>
                                            <button className="button-3-1" type="button" onClick={() => removeButton(index)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            {activeSection === buttonId && messages[buttonId]?.general && (
                                                <p className="sub-success-msg3" style={{ color: messages[buttonId].general.includes('successfully') ? 'green' : 'red' }}>
                                                    {messages[buttonId].general}
                                                </p>
                                            )}
                                        </form>
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
