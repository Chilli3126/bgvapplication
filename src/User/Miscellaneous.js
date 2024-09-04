import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Miscellaneous =()=>
{


     // Initialize state for form values and messages
     const [formValues, setFormValues] = useState({
        section1: { file: null, textArea: '' },
        section2: { file: null, textArea: '' },
        section3: { file: null, textArea: '' },
        section4: { file: null, textArea: '' },
        section5: { file: null, textArea: '' },
        
      });
    
      const [messages, setMessages] = useState({
        section1: { file: '', textArea: '', general: '' },
        section2: { file: '', textArea: '', general: '' },
        section3: { file: '', textArea: '', general: '' },
        section4: { file: '', textArea: '', general: '' },
        section5: { file: '', textArea: '', general: '' },
        
      });
    
      const [activeSection, setActiveSection] = useState('');
    
      // Refs to access file inputs
      const fileInputRefs = {
        section1: useRef(null),
        section2: useRef(null),
        section3: useRef(null),
        section4: useRef(null),
        section5: useRef(null),
      
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
          console.log('Miscellaneous data Saved:', formValues[section]);
    
          // Clear the file input
          if (fileInputRefs[section] && fileInputRefs[section].current) {
            fileInputRefs[section].current.value = '';
          }
        }
    
        // Set the active section for displaying messages
        setActiveSection(section);
      };
    

    const [show4, setshow4] =useState()
    const handileshow4 =()=>{
        if(show4 == true)
        {
            setshow4(false)
        }
        else
        {
            setshow4(true)
        }
    } 
    const [hide41,sethide41]= useState() 
    const [hide42,sethide42]= useState() 
    const [hide43,sethide43]= useState() 
    const [hide44,sethide44]= useState()  
    const [hide45,sethide45]= useState()

    return(<>
        <section>
            <div className="parent-4"  onClick={handileshow4}>Miscellaneous <p className="FontAwesomeIcon"><FontAwesomeIcon icon={faCaretDown}  /></p></div>
                    {
                          show4 && <div>
                             <div  className="child-41"  onClick={()=>sethide41(!hide41)}>Form16 last 3Yers</div>
                               {
                                hide41 ?
                                <div className="sub-child-41" >   
                                    {['section1'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error4">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error4">{messages[section].textArea}</p>}
                                                  <button className="button-4" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg4" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))}
                                </div> 
                                : null
                               }
                            <div  className="child-42"  onClick={()=>sethide42(!hide42)}>Last 6Months bank statements</div>
                               {
                                hide42 ? 
                                <div className="sub-child-42" >   
                                     {['section2'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error4">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error4">{messages[section].textArea}</p>}
                                                  <button className="button-4" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg4" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))}  
                                </div> 
                                : null
                               }
                           <div  className="child-43"  onClick={()=>sethide43(!hide43)}>UAN History</div>
                                {
                                    hide43 ?
                                    <div className="sub-child-43" >   
                                        {['section3'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error4">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error4">{messages[section].textArea}</p>}
                                                  <button className="button-4" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg4" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))}   
                                    </div> 
                                    : null
                                } 
                           <div  className="child-44"  onClick={()=>sethide44(!hide44)}> BGV form</div>
                               {
                                hide44 ? 
                                <div className="sub-child-44" >   
                                     {['section4'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error4">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error4">{messages[section].textArea}</p>}
                                                  <button className="button-4" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg4" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
                                                        {messages[section].general} </p>
                                                        )} 
                                                  </form> 
                                          </div>
                                         ))} 
                                </div> 
                                : null 
                               }   
                           <div  className="child-45"  onClick={()=>sethide45(!hide45)}>Address consent form</div>
                                {
                                    hide45 ?
                                    <div className="sub-child-45" >   
                                         {['section5'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 

                                                <form  >
                                                  <input type="file" name="file" ref={fileInputRefs[section]}
                                                onChange={(e) => handleChange(e, section)}/>
                                                      {messages[section].file && <p className="sub-file-error4">{messages[section].file}</p>}
                                                  <textarea row={2} name="textArea" 
                                                  value={formValues[section].textArea} onChange={(e) => handleChange(e, section)}
                                                  placeholder="Comments"></textarea>
                                                      {messages[section].textArea && <p className="sub-textarea-error4">{messages[section].textArea}</p>}
                                                  <button className="button-4" type="button" onClick={(e) => handleSubmit(e, section)}  >Save</button>   

                                                  {activeSection === section && messages[section].general && (
                                                      <p className="sub-success-msg4" style={{ color: messages[section].general.includes('successfully') ? 'green' : 'red' }}>
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
        </section>
    </>)
}
export default Miscellaneous;