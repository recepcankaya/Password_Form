import "./App.css"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"

const initialValue = { password: "" }

function App() {
  // This state provides text or password for input
  const [visible, setVisible] = useState(false)
  const [takePassword, setTakePassword] = useState(initialValue)

  const icon = <FontAwesomeIcon icon={visible ? faEye : faEyeSlash} />

  const handlePassword = (e) => {
    setTakePassword({ password: e.target.value })
  }

  const handleVis = () => {
    setVisible(!visible)
  }

  return (
    <div className="App">
      <form>
        <h2>Enter your password</h2>

        <div className="container">
          <p id="enter-password">Password</p>
          <input
            type={visible ? "text" : "password"}
            className="input-password"
            value={takePassword.password}
            onChange={handlePassword}
          />
          <span onClick={handleVis} className="toggle-icon">
            {icon}
          </span>
          <br />
        </div>

        <br />
        <div className="btns">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <button type="submit" id="continue">
            Continue
          </button>
        </div>
        <p className="text">Stay signed in</p>

        <p>
          <a href="#resetPassword" id="reset-password">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  )
}
export default App
