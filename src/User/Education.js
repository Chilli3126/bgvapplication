import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Employment from "../User/Employment";
import Miscellaneous from "../User/Miscellaneous";
import Addresses from "../User/Addresses"


const Education1 = () => {
  // Initialize state for form values and messages
  const [formValues, setFormValues] = useState({
    section1: { file: null, textArea: '' },
    section2: { file: null, textArea: '' },
    section3: { file: null, textArea: '' },
    section4: { file: null, textArea: '' },
  });

  const [messages, setMessages] = useState({
    section1: { file: '', textArea: '', general: '' },
    section2: { file: '', textArea: '', general: '' },
    section3: { file: '', textArea: '', general: '' },
    section4: { file: '', textArea: '', general: '' },
  });

  const [activeSection, setActiveSection] = useState('');

  // Refs to access file inputs
  const fileInputRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null)
  };

  // Constants for validation
  const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB in bytes
  const ACCEPTED_FILE_TYPES = ['application/pdf'];

  // Handle input changes
  const handleChange = (event, section) => {
    const { name, value, files } = event.target;
    const file = files ? files[0] : null;
    let newMessages = { file: '', textArea: '' };

    // Validate file size and type if file is present
    if (file) {
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        newMessages.file = 'Invalid file type. Please upload a PDF file only.';
      } else if (file.size > MAX_FILE_SIZE) {
        newMessages.file = 'File size exceeds the 2 MB limit.';
      }
    }

    // Validate textarea
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

  // Handle form submission for a specific section
  const handleSubmit = (event, section) => {
    event.preventDefault();

    // Initialize error messages
    let newMessages = {
      file: '',
      textArea: '',
      general: ''
    };

    // Validate inputs for the specific section
    if (!formValues[section].file) {
      newMessages.file = 'File input is required.';
    }
    if (!formValues[section].textArea.trim()) {
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

      // Clear form values for the specific section
      setFormValues(prevValues => ({
        ...prevValues,
        [section]: { file: null, textArea: '' }
      }));
      console.log('Education data submitted:', formValues[section]);

      // Clear the file input
      if (fileInputRefs[section] && fileInputRefs[section].current) {
        fileInputRefs[section].current.value = '';
      }
    }

    // Set the active section for displaying messages
    setActiveSection(section);
  };

  // Manage blur state for Post Graduation section
  const [isBlurred, setIsBlurred] = useState(false);

  const handleCheckboxChange = () => {
    setIsBlurred(prev => !prev);
  };

  // Manage section visibility
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(prev => !prev);

  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);
  const [hide4, setHide4] = useState(false);

  return (
    <div className="body">
      <div className="Homepage">
        <h4><a href="">Click </a> for BGV form</h4>
        <h4><a href="">Click</a> for Address consent form</h4>
      </div>

      <h3>BGV Documents</h3>
      <p style={{ color: "tomato" }}>* Only pdf accepted here</p>
      <section>
        <div className="parent">
          <div className="parent-1" onClick={handleShow}>
            Education
            <p className="FontAwesomeIcon">
              <FontAwesomeIcon icon={faCaretDown} style={{ paddingLeft: 35 }} />
            </p>
          </div>

          {show && (
            <div>
              <div className="box">
                <label>N/A</label>
                <input className="box1" type="checkbox" checked={isBlurred} onChange={handleCheckboxChange} />
              </div>

              <div>
                <div className={`child-1 ${isBlurred ? 'blurred' : ''}`} onClick={() => setHide1(!hide1)}>
                  <span></span>Post Graduation
                </div>
                {hide1 && (
                  <div className="sub-child-1">
                    {['section1'].map((section, index) => (
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <form>
                          <input type="file"   name="file"
                          ref={fileInputRefs[section]}
                          onChange={(e) => handleChange(e, section)} />
                          {messages[section].file && <p className="sub-file-error1">{messages[section].file}</p>}
                          <textarea row={2}  name="textArea"
                               value={formValues[section].textArea}
                               onChange={(e) => handleChange(e, section)}
                               placeholder="Comments" ></textarea>
                          {messages[section].textArea && <p className="sub-textarea-error1">{messages[section].textArea}</p>}
                          <button className="button-1" type="button" onClick={(e) => handleSubmit(e, section)}>Save</button>
                          {activeSection === section && messages[section].general && (
                            <p className="sub-success-msg1" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                              {messages[section].general}
                            </p>
                          )}
                        </form>
                      </div>
                    ))}
                  </div>
                )}

                <div className="child-2" onClick={() => setHide2(!hide2)}>Under Graduation</div>
                {hide2 && (
                  <div className="sub-child-2">
                    {['section2'].map((section, index) => (
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <form>
                          <input type="file"   name="file"
                          ref={fileInputRefs[section]}
                          onChange={(e) => handleChange(e, section)} />
                          {messages[section].file && <p className="sub-file-error1">{messages[section].file}</p>}
                          <textarea row={2}  name="textArea"
                               value={formValues[section].textArea}
                               onChange={(e) => handleChange(e, section)}
                               placeholder="Comments" ></textarea>
                          {messages[section].textArea && <p className="sub-textarea-error1">{messages[section].textArea}</p>}
                          <button className="button-1" type="button" onClick={(e) => handleSubmit(e, section)}>Save</button>
                          {activeSection === section && messages[section].general && (
                            <p className="sub-success-msg1" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                              {messages[section].general}
                            </p>
                          )}
                        </form>
                      </div>
                    ))}
                  </div>
                )}

                <div className="child-3" onClick={() => setHide3(!hide3)}>12th/Inter/HS</div>
                {hide3 && (
                  <div className="sub-child-3">
                    {['section3'].map((section, index) => (
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <form>
                          <input type="file"   name="file"
                          ref={fileInputRefs[section]}
                          onChange={(e) => handleChange(e, section)} />
                          {messages[section].file && <p className="sub-file-error1">{messages[section].file}</p>}
                          <textarea row={2}  name="textArea"
                               value={formValues[section].textArea}
                               onChange={(e) => handleChange(e, section)}
                               placeholder="Comments" ></textarea>
                          {messages[section].textArea && <p className="sub-textarea-error1">{messages[section].textArea}</p>}
                          <button className="button-1" type="button" onClick={(e) => handleSubmit(e, section)}>Save</button>
                          {activeSection === section && messages[section].general && (
                            <p className="sub-success-msg1" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                              {messages[section].general}
                            </p>
                          )}
                        </form>
                      </div>
                    ))}
                  </div>
                )}

                <div className="child-4" onClick={() => setHide4(!hide4)}>10th/SSC</div>
                {hide4 && (
                  <div className="sub-child-4">
                    {['section4'].map((section, index) => (
                      <div key={index} style={{ marginBottom: '20px' }}>
                        <form>
                          <input type="file"   name="file"
                          ref={fileInputRefs[section]}
                          onChange={(e) => handleChange(e, section)} />
                          {messages[section].file && <p className="sub-file-error1">{messages[section].file}</p>}
                          <textarea row={2}  name="textArea"
                               value={formValues[section].textArea}
                               onChange={(e) => handleChange(e, section)}
                               placeholder="Comments" ></textarea>
                          {messages[section].textArea && <p className="sub-textarea-error1">{messages[section].textArea}</p>}
                          <button className="button-1" type="button" onClick={(e) => handleSubmit(e, section)}>Save</button>
                          {activeSection === section && messages[section].general && (
                            <p className="sub-success-msg1" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                              {messages[section].general}
                            </p>
                          )}
                        </form>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          <div>
            <Addresses />
          </div>
          <div>
            <Employment />
          </div>
          <div>
            <Miscellaneous />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Education1;
