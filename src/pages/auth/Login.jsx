import React from 'react'
import login1 from "../../assets/auth/login2.svg";
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <>
    <div className="hero min-h-screen bg-none backdrop-blur-sm">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={login1} alt="" className="w-full" />

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
          <form
          //onSubmit={handleLogin}
          className="card-body bg-transparent">
            <div className="text-3xl text-center  font-semibold text-secondary ">
              Please Login
            </div>
            <div className="form-control relative my-6">
              <input
                autoComplete="off"
                id="username"
                name="username"
                type="text"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="username"
                required
              />
              <label
                htmlFor="username"
                className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
              >
                User Name
              </label>
            </div>
            <div className="form-control relative ">
              <input
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="peer placeholder-transparent h-10 w-full   bg-transparent text-black focus:outline-none focus:borer-rose-600 border-b-secondary/50 border-b-2"
                placeholder="Password"
                required
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            <div className="text-xs text-secondary">
              Don't have an account?{" "}
              <Link
                to="/auth/signup"
                className="hover:text-gray-400 hover:underline"
              >
                Signup
              </Link>
            </div>
            {/*{error && (
              <div className="text-xs text-warning">There is an error</div>
            )}*/}
            <div className="form-control mt-6">
              <button type="submit" className="customButton">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login