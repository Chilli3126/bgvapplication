import  {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCaretDown, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router";



const Miscellaneous =()=>
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
                                                 <form>
                                                    <div className="Download-here2" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                            <div  className="child-42"  onClick={()=>sethide42(!hide42)}>Last 6Months bank statements</div>
                               {
                                hide42 ? 
                                <div className="sub-child-42" >   
                                     {['section2'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 
                                                 <form>
                                                    <div className="Download-here2" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                           <div  className="child-43"  onClick={()=>sethide43(!hide43)}>UAN History</div>
                                {
                                    hide43 ?
                                    <div className="sub-child-43" >   
                                        {['section3'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 
                                                 <form>
                                                    <div className="Download-here2" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                           <div  className="child-44"  onClick={()=>sethide44(!hide44)}> BGV form</div>
                               {
                                hide44 ? 
                                <div className="sub-child-44" >   
                                     {['section4'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 
                                                 <form>
                                                    <div className="Download-here2" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
                           <div  className="child-45"  onClick={()=>sethide45(!hide45)}>Address consent form</div>
                                {
                                    hide45 ?
                                    <div className="sub-child-45" >   
                                         {['section5'].map((section, index) => (
                                           <div key={index} style={{ marginBottom: '20px' }}> 
                                                 <form>
                                                    <div className="Download-here2" > Download here <FontAwesomeIcon icon={faArrowRightLong}  className="arrow"  />
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
        </section>
    </>)
}
export default Miscellaneous;