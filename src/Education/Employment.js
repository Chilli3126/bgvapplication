import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Employment =()=>
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
            // console.log(name, value ))
        }
       //Handle input submit 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior (page reload)
        console.log('Employment data submitted:', file);
        setfile({
            ...file,
            file:"",text:""
        })
      }

    const [show3, setshow3] =useState()
             const handileshow3 =()=>{
                 if(show3 == true)
                 {
                     setshow3(false)
                 }
                 else
                 {
                     setshow3(true)
                 }
             } 

             const [hide31,sethide31]= useState() 
             const [hide32,sethide32]= useState() 
             const [hide33,sethide33]= useState() 

     const [buttons, setButtons] = useState([]); 
      const addButton = () => {
            // Generate a new button ID or label
            if (buttons.length >= 3) return; //  3 buttons
          const newButtonId = buttons.length + 1;
        setButtons([...buttons, `Button ${newButtonId}`]);
      };      

    return(<>
            <section>
                 <div className="parent-3"  onClick={handileshow3}>Employment <p><FontAwesomeIcon icon={faCaretDown} style={{paddingLeft:12}} width={16} /></p></div>
                        {
                           show3 && <div>

                            <div  className="child-31"  onClick={()=>sethide31(!hide31)}>Current employer last 3months payslips</div>
                                {
                                    hide31 ?
                                    <div className="sub-child-31" >   
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-3" type="button" onClick={handleSubmit}>Save</button>    
                                    </div> 
                                    : null 
                                }
                            <div  className="child-32"  onClick={()=>sethide32(!hide32)}>Previous employer Experence/Relieving letter</div>
                                {
                                    hide32 ? 
                                    <div className="sub-child-32" >   
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-3" type="button" onClick={handleSubmit}>Save</button>    
                                    </div> 
                                    : null
                                }  
                                 <div  className="child-33" onClick={addButton}>+ADD Employer</div>
                                 
                                 <div>
                                    {buttons.map(( index) => (
                                    <div>
                                         <div className="child-32" >Previous employer Experence/Relieving letter</div>
                                         <div className="sub-child-33" >   
                                             <input type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile} />
                                             <textarea row={2} type="text" name="text" value={file.text} onChange={handilefile} placeholder="Comments"></textarea>
                                             <button className="button-3" type="button" key={index} onClick={handleSubmit}>  Save</button>    
                                         </div>
                                    </div> 
                                    ))}
                                </div>
                             </div>
                        }
            </section>
    </>)
}
export default Employment;
