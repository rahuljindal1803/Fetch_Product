import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.username === "" || user.password === "") return;
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) localStorage.setItem("token", data.token);
        navigate("/");
        setUser({
          username: "",
          password: "",
        });
      });
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center flex-col items-center bg-blue-50 ">
        <div className="w-96 h-2/4  shadow-2xl bg-white  flex flex-col items-center justify-center rounded-3xl">
          <h1 className="w-56 h-11 text-center   font-serif font-semibold ">
            Welcome!
            <br />
            Project-BWI
          </h1>

          <span className="w-56 my-1 mt-3">Username</span>

          <input
            type="text"
            placeholder="username"
            value={user.username}
            name="username"
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            className=" w-56 h-9 placeholder:italic    placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-grey-500 focus:ring-grey-500 focus:ring-1 sm:text-sm"
          />
          <span className="w-56 my-1 mt-3">Password</span>

          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            className="  w-56 h-9 placeholder:italic    placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-grey-500 focus:ring-grey-500 focus:ring-1 sm:text-sm"
          />
          <button
            onClick={handleLogin}
            disabled={user.username === "" || user.password === ""}
            className="w-32 h-9 my-3 bg-blue-500 text-white rounded-xl transition-all hover:bg-blue-600 active:bg-blue-400 focus:bg-indigo-200 disabled:bg-gray-500"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
