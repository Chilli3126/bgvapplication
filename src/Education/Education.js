import {  useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Addresses from "./Addresses"
import Employment from "./Employment"
import Miscellaneous from "./Miscellaneous"

const Education =()=>
{

    const [file,setfile]=useState({file:'',text:''})
    //handle input change
    const handilefile =(e)=>
    {
        const { name, value } = e.target;
            setfile({
            ...file,
            [name]: value
            });
            // console.log(e.target.value)
        }
    // handle input submite

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior (page reload)
        console.log('Education data submitted:', file);
        setfile({
            ...file,
            file:"",text:""
        })
      }

      const [isBlurred, setIsBlurred] = useState(false);

        const handleClick = () => {
            setIsBlurred(!isBlurred);
        };
    
     //parenet-1
    const [show, setshow] =useState()
        	const handileshow =(event)=>{
                if(show == true)
                {
                    setshow(false)
                }
                else
                {
                    setshow(true)
                }
            }
          
            const [hide1,sethide1]= useState() 
            const [hide2,sethide2]= useState() 
            const [hide3,sethide3]= useState() 
            const [hide4,sethide4]= useState()  
            
       const [visible,setvisible] =useState(true)  
       const notvisible =()=>
        {
           if(visible ==true)
           {
            setvisible(false)
           }
           else{
            setvisible(true)
           }
        }



    return(<>

    <div className="body">
            <div className="Homepage" >
               <h4><a href="">Click </a> for BGV form</h4>
               <h4><a href="">Click</a> for Address consent form</h4>
            </div>

            <h3>BGV Documents </h3>
            <p style={{color:"tomato"}}>* Only pdf accept's here</p>
            <section>
                  <div className="parent">
                    <div className="parent-1" onClick={handileshow}>Education <p className="FontAwesomeIcon"><FontAwesomeIcon icon={faCaretDown} style={{paddingLeft:35}} /></p> </div>
                    
                    {
                        show && <div>
                            <div>
                               <div className="box">
                                    <label>N/A</label>
                                    <input className="box1" type="checkbox" onClick={handleClick} />
                               </div>
                                <div  className={`blur-container ${isBlurred ? 'blurred' : ''}`}>    
                                     <div className="child-1" onClick={()=>sethide1(!hide1)}><span></span>Post Graduation</div>
                                    {
                                        hide1 ? 
                                            <div className="sub-child-1" >   
                                                <input   type="file" accept=".pdf"name="file"value={file.file}  onChange={handilefile}/>
                                                <textarea row={2} type="text" name="text"value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                                <button className="button-1" type="button" onClick={handleSubmit}>Save</button>    
                                            </div>
                                        : null
                                    }
                                </div>
                            </div>        
                        
                       <div  className="child-2"  onClick={()=>sethide2(!hide2)}>Under Graduation</div>
                           {
                            hide2 ?
                            <div className="sub-child-2" >   
                                 <input   type="file" accept=".pdf"name="file"value={file.file}  onChange={handilefile}/>
                                  <textarea row={2} type="text" name="text"value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                  <button className="button-1" type="button" onClick={handleSubmit}>Save</button>    
                             </div>
                            : null 
                           }
                       <div  className="child-3"  onClick={()=>sethide3(!hide3)}> 12th/Inter/HS </div>
                           {
                            hide3 ? 
                            <div className="sub-child-3" >   
                                <input   type="file" accept=".pdf"name="file"value={file.file}  onChange={handilefile}/>
                                <textarea row={2} type="text" name="text"value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                <button className="button-1" type="button" onClick={handleSubmit}>Save</button>    
                            </div>
                            : null
                           }
                       <div  className="child-4"  onClick={()=>sethide4(!hide4)}>10th/SSC</div>
                           {
                            hide4 ?
                                <div className="sub-child-1" >   
                                    <input   type="file" accept=".pdf"name="file"value={file.file}  onChange={handilefile}/>
                                    <textarea row={2} type="text" name="text"value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                    <button className="button-1" type="button" onClick={handleSubmit}>Save</button>    
                                </div>
                            : null 
                           }
                     </div>
                    }
                    </div>

                    <div>
                        <Addresses />
                    </div>
                    <div>
                        <Employment />
                    </div>
                    <div>
                        <Miscellaneous />
                    </div>
            </section>
        </div>      
    </>)
}
export default Education;