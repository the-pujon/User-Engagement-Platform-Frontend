import React from "react";
import signup1 from "../../assets/auth/login2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const Signup = () => {
  const { signup } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const username = form.username.value;
    const password = form.password.value;

    console.log(name, username, password);

    console.log(import.meta.env.VITE_BASE_URL);
    signup(username, password);
    navigate("/")
  };

  return (
    <>
      <div className="hero min-h-screen bg-none backdrop-blur-sm text-secondary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={signup1} alt="" className="w-full" />

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-transparent ">
            <form onSubmit={handleSubmit} className="card-body bg-transparent">
              <div className="text-3xl text-center  font-semibold">
                Please Register
              </div>
              <div className="form-control relative mt-5">
                <input
                  autoComplete="off"
                  id="name"
                  name="name"
                  type="name"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-primary/70 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm"
                >
                  Name
                </label>
              </div>

              <div className="form-control relative my-5">
                <input
                  autoComplete="off"
                  id="username"
                  name="username"
                  type="text"
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
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
                  className="peer placeholder-transparent h-10 w-full   bg-transparent text-secondary focus:outline-none focus:borer-rose-600  border-b-secondary/50 border-b-2"
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
              <div className="text-xs text-secondary mt-2 ">
                Already have an account?
                <Link
                  to="/auth/login"
                  className="hover:text-gray-400 hover:underline"
                >
                  Login
                </Link>
              </div>
              {/*{error && <div className="text-xs text-warning">{error}</div>}*/}
              <div className="form-control mt-6">
                <button type="submit" className="customButton">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
