import './register.scss'
import { Link } from 'react-router-dom'
import ebayLogo from '../../../../img/ebayLogo.png'
import { useState } from 'react';
import axios from 'axios';
// import istance from '../../../API'
function SingUp() {

  const [Username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const handleSubmit = (e:any) => {
    e.preventDefault()

    let payload = {
      username: Username,
      password: password
    }

    axios.post('https://dummyjson.com/auth/login ', {...payload})
    .then(response => console.log(response)
    )

  }
  let active = Boolean(Username) && Boolean(password)

  return (
    <>
      <header>
        <div className="register_list_container">
          <li>
            <img src={ebayLogo} alt="" />
          </li>
          <li>
            <h2> Already a member? <Link to='/Ebay/Login'>Sign in</Link> </h2>
          </li>
        </div>
        <div className="register__container">
          <h2>Create an account</h2>
          <ul className="register__list">
            <form id="register_full" onSubmit={handleSubmit}>
              <li className="register__iytem">
                <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
              </li>
              <li className="register__iytem">
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </li>
              <li className="register__iytem">
                <p>By Creating an account, you agree to our User Agreement  and acknowledge reading our User Privacy Notice .</p>
              </li>
              <li className="register__iytem">
                <button type="submit" form='register_full' disabled={!active}>Create account</button>
              </li>
            </form>
          </ul>
        </div>
        <div className='foter'>
          <span className='border_line'></span>
          <h2>Copyright © 1995-2023 eBay Inc. All Rights Reserved.
            Accessibility
            ,<span>
            User Agreement
            ,
            Privacy
            ,
            Payments Terms of Use
            ,
            Cookies
            ,
            Your Privacy Choices
            and
            AdChoice</span></h2>
        </div>
      </header>
    </>
  )
}

export default SingUp