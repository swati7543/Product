import { Email } from "@mui/icons-material";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);
  console.log(password);
  const value = () => {
    console.log(email);
    console.log(password);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] h-3/5 pt-10 bg-white shadow-2xl rounded-2xl p-5">
        <div>
          <div className="mr-56 mb-9">
            <h1 className="mr-10 text-2xl font-semibold  ">Login</h1>
            <h4>to get started</h4>
          </div>
          <input
            type="text"
            name=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id=""
            placeholder="Email"
            className="ml-2 bg-gray-50 h-10 p-6 rounded-xl w-full mb-5"
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="ml-2 bg-gray-50 h-10 rounded-xl p-6 w-full mb-5"
          />
        </div>
        <div className="mr-52 mb-6">
          <h1>Forgot password? </h1>
        </div>
        <div
          onClick={() => value()}
          className="w-full h-10 mb-8 bg-blue-800 p-2 text-white rounded-xl"
        >
          Save
        </div>
        <div>
          <h1>New User?Register</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginDetails = () => {
//     console.log("email", email);
//     console.log("password", password);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="w-[400px] h-3/5 pt-10 bg-white shadow-2xl rounded-2xl p-5">
//         <div>
//           <div className="mr-56 mb-9">
//             <h1 className="mr-10 text-2xl font-semibold  ">Login</h1>
//             <h4>to get started</h4>
//           </div>
//           <input
//             type="text"
//             name=""
//             value={email}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//             id=""
//             placeholder="Email"
//             className="ml-2 bg-gray-50 h-10 p-6 rounded-xl w-full mb-5"
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="Password"
//             id=""
//             value={password}
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//             placeholder="Password"
//             className="ml-2 bg-gray-50 h-10 rounded-xl p-6 w-full mb-5"
//           />
//         </div>
//         <div className="mr-52 mb-6">
//           <h1>Forgot password? </h1>
//         </div>
//         <div
//           onClick={() => {
//             loginDetails();
//           }}
//           className="w-full h-10 mb-8 bg-blue-800 p-2 text-white rounded-xl"
//         >
//           Save
//         </div>
//         <div>
//           <h1>New User?Register</h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
