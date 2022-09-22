import React from 'react'
// import { useNavigate } from "react-router-dom"
const Login = () => {

    // const navigate = useNavigate();

    return (
        <form
            className="details"
        >     <div>
                <input className="email" type="email" />
            </div>

            <div>
                <input className="password" type="password" />
            </div>
            {/* <div>
                <button type="submit" onClick={() => { navigate("/AllData") }}>Login</button>

            </div> */}
        </form>
    )
}

export default Login