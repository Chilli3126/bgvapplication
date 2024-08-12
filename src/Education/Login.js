import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
     
    const [formdata,setformdata] =useState({Username:'',Email:'' ,Password:''})
    const [formerror,setformerror]=useState({})
    const [successMessage, setSuccessMessage] = useState('');


    const Handlechange =(e)=>
    {
        setformdata({...formdata,
            [e.target.name] : e.target.value
        })
    }

    const HandleSubmit =(e)=>
    {
        
        e.preventDefault();
       if(validateform())
       {
        console.log("Sending Sign Up data",formdata);
        setSuccessMessage(' Successfully Submitted !');
          // Clear the form fields after successful submission
        setformdata({
            Username: '',
            Email: '',
            Password: '',})
       }
       else {
        setSuccessMessage('');
      }
       
    }
    //Username validation
    const validateform =()=>
    {
        let isvalid =true;
        let error = {}
        if(formdata.Username =='')
        {
            error.Username ='Username is required '
            isvalid= false;
        }
        else 
        {
            if(formdata.Username .length <= 5 || formdata.Username.length >=20 )
            {
                error.Username ="Username should be 5 to 20 char's.."
                isvalid= false;
            }
        }

    //Email validation
         if(formdata.Email =='')
        {
            error.Email ='Email is required '
            isvalid= false;
        }
        else 
        {
           if( !validemail(formdata.Email))
           {
               error.Email ="Enter valid email..."
               isvalid =false;
           }
        }  
    //Password validation
        if(formdata.Password ==="")
        {
           error.Password =" Password is required.."
           isvalid =false
        }
        else 
        {
           if  ( !checkPassword(formdata.Password))
           {
               error.Password ="one Uppercase & one special Char's"
           }
        }      
        setformerror(error)
        return isvalid;
    }



//Hide error validation
const Hideerror =(e)=>
{
    //console.log(e.target)
    setformerror({
        ...formerror,[e.target.name] :''
    })
}
//Show error validation
const Showerror =(e)=>
{
   if(e.target.value === '')
   {
         setformerror({
        ...formerror,[e.target.name] :e.target.name+' is required.'
        })
   }
}
const validemail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const  checkPassword =(str)=>
    {
        var re = /^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}/
        return re.test(str);
    }

//Login Validation
  const [form,setform] =useState({Email:'',Password:''})
  const [loginerror, setloginerror] = useState({});
  const [successMsg, setsuccessMsg] = useState('');

  const HandleInput=(e)=>
  {
    setform({...form,
        [e.target.id] :e.target.value
    })
  } 
        // Dummy credentials for validation
        const dummycandidate = {
            Email: 'user@example.com',
            Password: 'password123',
        };

         // Basic validation function
         const validateLogin = () => {
            const newError = {};
            const { Email, Password } = form;

            // Example validation rules
            if (!Email) {
            newError.Email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(Email)) {
            newError.Email = 'Email address is invalid';
            }
            if (!Password) {
            newError.Password = 'Password is required';
            }

            setloginerror(newError);
            return Object.keys(newError).length === 0;
        };
        
  // console.log(form)
  const HandleSubmits =(e)=>
    {
        e.preventDefault();
            if(validateLogin())
            {
                console.log("Sending Login data",form);
                if(form.Email === dummycandidate.Email &&
                    form.Password === dummycandidate.Password)
                    {
                        setsuccessMsg('');
                        setloginerror({});
                    }
                    else {
                        setloginerror({ candidate: 'Invalid email or password' });
                        setsuccessMsg('');
                     }
            }
            else {
                setsuccessMsg('');
              }      
      }




//Forget Password Validation
const [pass,setpass] =useState({newPassword:'', confirmPassword:''})
const [error, seterror] = useState({});
  const [success, setsuccess] = useState('');

const HandlePassword =(e)=>
    {
        setpass({...pass,
            [e.target.name]:e.target.value
        })
        //console.log(pass)
    } 

const validatepass=()=>
    {
        const newErrors = {};
        const { newPassword, confirmPassword } = pass;

        if (!newPassword) {
        newErrors.newPassword = '';
        } else if (newPassword.length < 6) {  // Example: minimum length check
        newErrors.newPassword = 'Password must be at least 6 char long';
        }
            if (!confirmPassword) {
            newErrors.confirmPassword = '';
            } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'password do not match';
            }

        seterror(newErrors);
        return Object.keys(newErrors).length === 0;   
    }    
         
const HandleSubmit1=(e)=>
    {
        e.preventDefault();
        if(validatepass())
        {
            console.log('Sending Updeted Password',pass);
            setsuccess('Password Updated')
            setpass({newPassword:'',
                confirmPassword:''})
            seterror({});
        }
        else {
            setsuccess('');
          }
    }   

    return (
        <div className="Container">
                <div>
                     <h2> {isLogin ? 'Login' : 'Sign Up'}</h2>
                </div>
                <div>
                    {/*Sign Up page*/}
                    {!isLogin && (
                    <form  onSubmit={HandleSubmit}>
                        <div className='Inputs'>
                        <div className='Input-child'>
                            <div className='img'><FontAwesomeIcon icon={faUser} /></div>
                            <input onFocus={Hideerror} onBlur={Showerror} type="text" placeholder='Enter Username' name='Username' value={formdata.Username} onChange={Handlechange} />
                            {formerror.Username && <span className='error'>{formerror.Username}</span>}
                        </div>
                        <div className='Input-child'>
                            <div className='img'><FontAwesomeIcon icon={faEnvelope} /></div>
                            <input onFocus={Hideerror} onBlur={Showerror} type='email' placeholder='Enter Email Id' name='Email' value={formdata.Email} onChange={Handlechange} />
                            {formerror.Email && <span className='error'>{formerror.Email}</span>}
                        </div>
                        <div className='Input-child'>
                            <div className='img'><FontAwesomeIcon icon={faLock} /></div>
                            <input onFocus={Hideerror} onBlur={Showerror} type='password' placeholder='Enter Password' name='Password' value={formdata.Password} onChange={Handlechange} />
                            {formerror.Password && <span className='error'>{formerror.Password}</span>}
                        </div>

                        <div className='Succes'>
                             {successMessage && <p>{successMessage}</p>}
                        </div>

                        <div className='Submit-container'>
                            <button className='Submit' type='submit'>Sign Up</button>
                         </div>
                         <div className='Login-container'>
                            I have an account...! 
                            <a  href='#' onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ?' ' : ' Login'}
                            </a>
                         </div>

                        </div> 
                    </form>   
                    )}
                {/*Lohin page*/}
                    { isLogin && (
                        <form onSubmit={HandleSubmits}>
                        <div className='Inputs'>
                            <div className='Input-child'>
                                <div className='img'><FontAwesomeIcon icon={faEnvelope} /></div>
                                <input type='email' placeholder='Enter Email Id' id='Email' value={form.Email} onChange={HandleInput}  />
                                {loginerror.Email && <span style={{ color: 'red' }}>{loginerror.Email}</span>}
                                
                            </div>
                            <div className='Input-child'>
                                <div className='img'><FontAwesomeIcon icon={faLock} /></div>
                                <input type='Password' placeholder='Enter Password' id='Password' value={form.Password} onChange={HandleInput}   />
                                {loginerror.Password && <span style={{ color: 'red' }}>{loginerror.Password}</span>}
                            </div>
                            <div>
                                <p>Forget my Password..? <a href='#popup'> Click</a></p>
                            </div>
                                <div className='Invalid'>
                                {loginerror.candidate && <p style={{ color: 'red' }}>{loginerror.candidate}</p>}
                                </div>
                            <div className='Submit-container1'>
                                <button className='Submit1' type='submit'>Login</button>
                             </div>

                             <div className='Login-container'>
                                Don't have an account...!
                                 <a  href='#' onClick={() => setIsLogin(!isLogin)}>
                                    {isLogin ?' Sign Up' : ''}
                                 </a>
                            </div>
                     </div>
                     </form>    
                        
                    )}
                </div>
                
                {/*Forget password*/}
                    <form onSubmit={HandleSubmit1}>     
                        <div id='popup'>
                        <a href='#'className='close'>&times;</a>
                            <div className='Content'>
                                <div className='Content-child'>
                                    <label> New Password :</label>
                                    <input type='text' name='newPassword' value={pass.newPassword} onChange={HandlePassword} />
                                    {error.newPassword && <span style={{ color: 'white' }}>{error.newPassword}</span>}
                                </div>
                                <div className='Content-child'>
                                    <label> Conform Password :</label>
                                    <input type='password' name='confirmPassword' value={pass.confirmPassword} onChange={HandlePassword}  />
                                    {error.confirmPassword && <span style={{ color: 'white' }}>{error.confirmPassword}</span>}
                                </div>
                                <div className='Password'>
                                {success && <p>{success}</p>}
                                </div>

                               <div className='Done-container'>
                                    <button className='Done' type='submit'>Done</button>
                               </div>
                            </div>
                        </div>
                    </form>
                        
        </div>
    );
};

export default Login;
