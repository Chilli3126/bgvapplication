import { useState } from "react"

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
            // console.log(e.target.value)
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

    return(<>
            <section>
                 <div className="parent-3"  onClick={handileshow3}>Employment <span className="arrow-down" ></span></div>
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
                                 <div  className="child-33"  onClick={()=>sethide33(!hide33)}>+ADD Employer</div>
                                {
                                    hide33 ? 
                                    <div className="sub-child-33" >   
                                        <input   type="file" accept=".pdf"name="file" value={file.file}  onChange={handilefile}/>
                                        <textarea row={2} type="text" name="text" value={file.text}  onChange={handilefile} placeholder="Comments"></textarea>
                                        <button className="button-3" type="button" onClick={handleSubmit}>Save</button>    
                                    </div> 
                                    : null
                                }  
                             </div>
                        }
            </section>
    </>)
}
export default Employment;
