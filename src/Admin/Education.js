import {  useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCaretDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";
import Employment from "./Employment";
import Miscellaneous from "./Miscellaneous";
import Address from "./Address";

const Education = () => {
    const navigate = useNavigate(); // Use navigate for routing

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

   
    // Handle show/hide for sections
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(false);
    const [hide4, setHide4] = useState(false);


    

 
    return (
        <>
            <div className="body">
                <h3>BGV Documents </h3>
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
                                <div>
                                    <div>
                                        <div className="child-1" onClick={() => setHide1(!hide1)}>
                                            <span></span>Post Graduation
                                        </div>
                                        {hide1 && (
                                            <div className="sub-child-1">
                                                {['section1'].map((section, index) => (
                                             <div key={index} style={{ marginBottom: '20px' }}>
                                                 <form>
                                                    <div className="Download-here" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
                                                     <button className="Download-file"
                                                        type="button"
                                                        onClick={() => handleDownload('/path/to/current-address/file.pdf', 'current-address.pdf')} >
                                                        <FontAwesomeIcon icon={faFileArrowDown} /> 
                                                     </button>
                                                    </div>      
                                                </form>
                                            </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="child-2" onClick={() => setHide2(!hide2)}>
                                    Under Graduation
                                </div>
                                {hide2 && (
                                     <div className="sub-child-1">
                                     {['section1'].map((section, index) => (
                                  <div key={index} style={{ marginBottom: '20px' }}>
                                      <form>
                                         <div className="Download-here" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
                                          <button className="Download-file"
                                             type="button"
                                             onClick={() => handleDownload('/path/to/current-address/file.pdf', 'current-address.pdf')} >
                                             <FontAwesomeIcon icon={faFileArrowDown} /> 
                                          </button>
                                         </div>      
                                     </form>
                                 </div>
                                     ))}
                                 </div>
                                )}
                                
                                <div className="child-3" onClick={() => setHide3(!hide3)}>
                                    12th/Inter/HS
                                </div>
                                {hide3 && (
                                   <div className="sub-child-1">
                                   {['section1'].map((section, index) => (
                                <div key={index} style={{ marginBottom: '20px' }}>
                                    <form>
                                       <div className="Download-here" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
                                        <button className="Download-file"
                                           type="button"
                                           onClick={() => handleDownload('/path/to/current-address/file.pdf', 'current-address.pdf')} >
                                           <FontAwesomeIcon icon={faFileArrowDown} /> 
                                        </button>
                                       </div>      
                                   </form>
                               </div>
                                   ))}
                               </div>
                                )}
                                
                                <div className="child-4" onClick={() => setHide4(!hide4)}>
                                    10th/SSC
                                </div>
                                {hide4 && (
                                     <div className="sub-child-1">
                                     {['section1'].map((section, index) => (
                                  <div key={index} style={{ marginBottom: '20px' }}>
                                      <form>
                                         <div className="Download-here" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
                                          <button className="Download-file"
                                             type="button"
                                             onClick={() => handleDownload('/path/to/current-address/file.pdf', 'current-address.pdf')} >
                                             <FontAwesomeIcon icon={faFileArrowDown} /> 
                                          </button>
                                         </div>      
                                     </form>
                                 </div>
                                     ))}
                                 </div>
                                )}
                            </div>
                        )}
                    </div>
                        <div>
                            <Address />
                        </div>
                    <div>
                        <Employment />
                    </div>
                    <div>
                        <Miscellaneous />
                    </div>
                </section>
                
            </div>
        </>
    );
};

export default Education;
