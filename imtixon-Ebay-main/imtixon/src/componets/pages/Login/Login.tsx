import './login.scss'
import ebayLogo from '../../../../img/ebayLogo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
// import istance from '../../../API'

function Login() {

  const [ onClickInfo, setonClickInfo ] = useState<Boolean>(false);
  const [Email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");

  const openInfo = () => {
    setonClickInfo(true)
    console.log(onClickInfo);
  }


  const handleSubmit = (e:any) => {
    e.preventDefault()

    let payload = {
      username: Email,
      password: password
    }

    axios.post('https://dummyjson.com/auth/login ', {...payload})
    .then(response => console.log(response)
    )

  }
  let active = Boolean(Email) && Boolean(password)

  return (
    <>
      <header>
          <div className='nav_login login_wrapper'>
            <li>
            <img src={ebayLogo} alt="" />
            </li>
            <li>
              <h2>Tell us what you think</h2>
            </li>
          </div>
        <div className="singin_container">
          <ul className="singin_list">
            <h2>Hello</h2>
            <p>Sign in to eBay or create an account</p>
            <form id="singin_click" onSubmit={handleSubmit}>
              <li className="singin_iytem">
                <input id="singin_email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </li>
              <li className="singin_iytem">
                <input id="singin_password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </li>
              <li className="singin_iytem">
                <button type="submit" form='singin_click' disabled={!active}>Continue</button>
              </li>
            </form>
          </ul>
          <ul className='info_list'>
            <li className='info_iytem'>
              <input onClick={openInfo} type="checkbox" />
              <h2>Stay signed in</h2>
            </li>
            <h2>Using a public or shared device?</h2>
            <h2>Uncheck to protect your account.</h2>
            <Link to='' className='link'>Learn more</Link>
          </ul>
        </div>
        <div className='foter_login'>
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

export default Login