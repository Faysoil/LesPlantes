import Navbar from '../Navbar/Navbar';
import '../index.css';
import React, { useState } from "react";

function Inscription() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // code pour traiter les données du formulaire
    };
  
    return (
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 scrollable-container">
          <form
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
            onSubmit={handleSubmit}
          >
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Nom"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Prenom"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
  
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
  
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Age"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

  
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Creer un compte
            </button>
  
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>
  
          <div className="text-grey-dark mt-6">
            T'as déja un compte?{" "}
            <a className="no-underline border-b border-blue text-blue" href="../">
              Connectes toi
            </a>
            .
          </div>
        </div>
      </div>
    );
  }


export default Inscription