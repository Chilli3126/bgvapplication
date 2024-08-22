import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Miscellaneous =()=>
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
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit behavior (page reload)
        console.log('Miscellaneous data submitted:', file);
        setfile({
            ...file,
            file:"",text:""
        })
      }

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
                                    <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                    <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                    <button className="button-4" type="button" onClick={handleSubmit}>Save</button>    
                                </div> 
                                : null
                               }
                            <div  className="child-42"  onClick={()=>sethide42(!hide42)}>Last 6Months bank statements</div>
                               {
                                hide42 ? 
                                <div className="sub-child-42" >   
                                    <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                    <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                    <button className="button-4" type="button" onClick={handleSubmit}>Save</button>    
                                </div> 
                                : null
                               }
                           <div  className="child-43"  onClick={()=>sethide43(!hide43)}>UAN History</div>
                                {
                                    hide43 ?
                                    <div className="sub-child-43" >   
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-4" type="button" onClick={handleSubmit}>Save</button>    
                                    </div> 
                                    : null
                                } 
                           <div  className="child-44"  onClick={()=>sethide44(!hide44)}> BGV form</div>
                               {
                                hide44 ? 
                                <div className="sub-child-44" >   
                                    <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                    <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                    <button className="button-4" type="button" onClick={handleSubmit}>Save</button>    
                                </div> 
                                : null 
                               }   
                           <div  className="child-45"  onClick={()=>sethide45(!hide45)}>Address consent form</div>
                                {
                                    hide45 ?
                                    <div className="sub-child-45" >   
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-4" type="button" onClick={handleSubmit}>Save</button>    
                                    </div> 
                                    : null
                                }       
                        </div>
                 }
        </section>
    </>)
}
export default Miscellaneous;