import { useEffect, useState } from "react";

const useAuth = () => {
  const [loggedUser, setLoggedUser] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  const login = (username, password) => {
    console.log(username, password);

    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/login`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setUser(data.userId)
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
      });
  };

  const signup = (username, password) => {
    console.log(username, password);

    fetch(`${import.meta.env.VITE_BASE_URL}/api/user/signup`, {
      mode: "no-cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        //setUser(data.userId)
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(token);

    if (token) {
      setLoggedUser(true);
      setUser(userId)
    } else {
      setLoggedUser(false);
      setUser(null)
    }
  }, []);

  console.log(user)

  return {
    login,
    signup,
    loggedUser,
    user,
  };
};

export default useAuth;
