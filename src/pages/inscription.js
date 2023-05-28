import React, {useState} from 'react'
import '../index.css';
import '../App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import axios from 'axios';



function Inscription() {
  const [validation, setValidation] = useState(false); // état local pour stocker la valeur de la checkbox

  const url ="http://localhost:3000/users"
  const [data, setData] = useState({
    userId:"",
    name:"",
    lastName:"",
    age:"",
    email:"",
    password:"",

  });
  
function submit(e){
  e.preventDefault();
  axios.post(url,{
    userId: data.userId,
    name: data.name,
    lastName: data.lastName,
    age: data.age,
    email: data.email,
    password: data.password,
  })
  .then(res=>{
    console.log(res.data)
  })
}

  function handle(e){
const newdata={...data}
newdata[e.target.id] = e.target.value
setData(newdata)
console.log(newdata)
  };

  function soumettreFormulaire(event) {
    event.preventDefault(); // empêche la page de se recharger lors de la soumission du formulaire
    // traitez les données du formulaire ici...
  }


  
    return (
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 scrollable-container">
          <form
            className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
            onSubmit={(e)=> submit(e)}>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <input
             onChange={(e)=>handle(e)} placeholder="Pseudo" id="userId" value={data.userId} 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />

          <input
             onChange={(e)=>handle(e)} placeholder="Prenom" id="name" value={data.name} 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />

            <input
             onChange={(e)=>handle(e)} placeholder="nom" id="lastName" value={data.lastName} 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />

            <input
             onChange={(e)=>handle(e)} placeholder="age" id="age" value={data.age} 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />

            <input
             onChange={(e)=>handle(e)} placeholder="email" id="email" value={data.email} 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />
  
            <input
             onChange={(e)=>handle(e)} placeholder="mot de passe" id="password" value={data.password}
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
            />

  
    <form onSubmit={soumettreFormulaire}>
      <input
        type="checkbox"
        id="validation"
        name="validation"
        checked={validation}
        onChange={(event) => setValidation(event.target.checked)}
      />
      <label htmlFor="validation">
        Je confirme avoir pris connaissance des{' '}
        <a href="/ReglesConf">règles de confidentialité</a>.
      </label>

      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-green focus:outline-none my-1"
        disabled={!validation} // désactive le bouton si la case n'est pas cochée
      >
        submit
      </button>
      </form>
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