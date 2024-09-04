import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCaretDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";


const Address =()=>
{
   
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

    // Logout function and redirect
    const handleLogout = () => {
        // Clear any user session data if applicable
        // For example, remove user token from local storage
        localStorage.removeItem('userToken'); 

        // Navigate to the home page
        navigate('/');
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
                                                <form>
                                                    <div className="Download-here1" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                                        : null
                                    }
                             <div  className="child-22"  onClick={()=>sethide22(!hide22)}>Current address/address Mentioned in Amazon/insurance</div>
                                {
                                    hide22 ? 
                                    <div className="sub-child-22" >   
                                         {['section2'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 
                                                <form>
                                                    <div className="Download-here1" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                                    : null
                                }   
                            </div>
                        }
            </div>

    </>)
}
export default Address;