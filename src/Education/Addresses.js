import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Addresses =()=>
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
       //Handle input submit 
       const handleSubmit =  (event) => {
        event.preventDefault();
        // Reset form
        console.log('Education data submitted:', file);
        setfile({...file,file:"",text:"" })
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
                <div className="parent-2"  onClick={handileshow2}>Addresses <p><FontAwesomeIcon icon={faCaretDown} style={{paddingLeft:25}} width={16} /></p></div>
                        {
                           show2 && <div>
                             <div  className="child-21"  onClick={()=>sethide21(!hide21)}>Permanent Address as per Adhar</div>
                                    {
                                        hide21 ?
                                        <div className="sub-child-21" >   
                                           <form>
                                            <input type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                            <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                            <button className="button-2" type="button" onClick={handleSubmit}  >Save</button>    
                                            </form> 
                                            
                                         </div>  
                                        : null
                                    }
                             <div  className="child-22"  onClick={()=>sethide22(!hide22)}>Current address/address Mentioned in Amazon/insurance</div>
                                {
                                    hide22 ? 
                                    <div className="sub-child-22" >   
                                        <form>
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-2" type="button"onClick={handleSubmit} >Save</button>
                                        </form> 
                  
                                    </div> 
                                    : null
                                }   
                            </div>
                        }
            </div>

    </>)
}
export default Addresses;