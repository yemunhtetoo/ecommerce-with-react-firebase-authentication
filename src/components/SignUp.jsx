import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const title = "Register";
const socialTitle = "Register with social media";
const btnText = "Register Now";
const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {createUserWithGmail, createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from= location.state?.from?.pathName || "/";

  function handleSignUp(e){
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(password!==confirmPassword){
      setErrorMessage("Password doesn't match! please provide a correct password")
    }
    else{
      setErrorMessage("");
      createUser(email,password).then((userCredential)=> {
        const user = userCredential.user;
        alert("Account created successfully done!!!!")
        navigate(from, {replace: true})
      }).catch((error)=>{
        console.log(error.message)
        alert(`${error.message}`)
    })
    }
  }

  function handleRegister(){
    createUserWithGmail().then((result)=>{
        const user = result.user;
        navigate(from, {replace: true})
    }).catch((error)=>{
        const errorMsg = error.message;
        setErrorMessage("Please Provide valid email & password")
    })
}
  return (
    <div className='login-section padding-tb section-bg'>
        <div className='container'>
            <div className='account-wrapper'>
                <h3 className='title'>{title}</h3>
                <form className='account-form' onSubmit={handleSignUp}>
                <div className='form-group'>
                        <input type='text' name='name' id='name' placeholder='Full Name *' required/>
                    </div>
                    
                    <div className='form-group'>
                        <input type='email' name='email' id='email' placeholder='Email Address *' required/>
                    </div>
                    <div className='form-group'>
                        <input type='password' name='password' id='password' placeholder='Password *' required/>
                    </div>
                    <div className='form-group'>
                        <input type='password' name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required/>
                    </div>
                    {/* show error message */}
                    <div>
                        {
                            errorMessage && (
                                <div className='error-message text-danger mb-1'>
                                    {errorMessage}
                                </div>
                            )
                        }
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='d-block lab-btn'>
                            <span>{btnText}</span>
                        </button>
                    </div>
                </form>
                {/* account button */}
                <div className='account-button'>
                    <span className='d-block cate pt-10'>
                        Have an account? <Link to="/login">Sign In</Link>
                    </span>
                    <span className='#'>
                        <span>or</span>
                    </span>

                    {/* social login */}
                    <h5 className='subtitle'>{socialTitle}</h5>
                    <ul className='lab-ul social-icons justify-content-center'>
                        <li>
                            <button className='google' onClick={handleRegister}><i className='icofont-google-plus'></i></button>
                        </li>
                        <li>
                            <a href='/' className='facebook'><i className='icofont-facebook'></i></a>
                        </li>
                        <li>
                            <a href='/' className='twitter'><i className='icofont-twitter'></i></a>
                        </li>
                        <li>
                            <a href='/' className='linkedin'><i className='icofont-linkedin'></i></a>
                        </li>
                        <li>
                            <a href='/' className='instagram'><i className='icofont-instagram'></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp