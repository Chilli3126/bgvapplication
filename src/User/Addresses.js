import { useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Addresses =()=>
{
        
    // Initialize state for form values and messages
    const [formValues, setFormValues] = useState({
      section1: { file: null, textArea: '' },
      section2: { file: null, textArea: '' },
      
    });
  
    const [messages, setMessages] = useState({
      section1: { file: '', textArea: '', general: '' },
      section2: { file: '', textArea: '', general: '' },
      
    });
  
    const [activeSection, setActiveSection] = useState('');
  
    // Refs to access file inputs
    const fileInputRefs = {
      section1: useRef(null),
      section2: useRef(null),
    
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
        console.log('Addresses data Saved:', formValues[section]);
  
        // Clear the file input
        if (fileInputRefs[section] && fileInputRefs[section].current) {
          fileInputRefs[section].current.value = '';
        }
      }
  
      // Set the active section for displaying messages
      setActiveSection(section);
    };
  
    const [show2, setshow2] =useState();
    const handileshow2=()=>{
        if(show2 == true)
        {
            setshow2(false)
        }
        else
        {
            setshow2(true)
        }
    } 
    
    const [hide21,sethide21]= useState() 
    const [hide22,sethide22]= useState() 
    return(<>

            <div>
                <div className="parent-2"  onClick={handileshow2}>Addresses <p className="FontAwesomeIcon"><FontAwesomeIcon icon={faCaretDown} style={{paddingLeft:30}} /></p></div>
                        {
                           show2 && <div>
                             <div  className="child-21"  onClick={()=>sethide21(!hide21)}>Permanent Address as per Adhar</div>
                                    {
                                        hide21 ?
                                        <div className="sub-child-21">
                                        {['section1'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error">{messages[section].textArea}</p>}
                                                  <button className="button-2" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))}
                                            
                                         </div>  
                                        : null
                                    }
                             <div  className="child-22"  onClick={()=>sethide22(!hide22)}>Current address/address Mentioned in Amazon/insurance</div>
                                {
                                    hide22 ? 
                                    <div className="sub-child-22" >   
                                         {['section2'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error">{messages[section].textArea}</p>}
                                                  <button className="button-2" type="button" onClick={(e) => handleSubmit(e, section)} >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg"  style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))}
                                            
                                    </div> 
                                    : null
                                }   
                            </div>
                        }
            </div>

    </>)
}
export default Addresses;