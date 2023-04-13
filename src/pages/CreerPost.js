import React, {useState} from 'react'
import '../index.css';
import '../App.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function CreerPost() {
    const url ="http://localhost:3000/posts"
    const [data, setData] = useState({
      title:"",
      description:"",
      name:"",
      image:"",
      idUser:"",
      adresse:"",

    });
  function submit(e){
    e.preventDefault();
    axios.post(url,{
      title: data.title,
      description: data.description,
      name: data.name,
      image: data.image,
      adresse: data.adresse,
      idUser: data.idUser,
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
  
    return (
    
        <div class="scrollable-container">
        <Navbar />    
      <form onSubmit={(e)=> submit(e)}>
        <div className="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div className="bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">
              Poster sa plante
            </h1>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="text-lx font-serif">
                  Titre:
                </label>





                <input type="text" onChange={(e)=>handle(e)} placeholder="idUser" id="idUser" value={data.idUser} className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
                <input type="text" onChange={(e)=>handle(e)} placeholder="title" id="title" value={data.title} className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
                <input type="text" onChange={(e)=>handle(e)} placeholder="image" id="image" value={data.image} className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-lg font-serif"
                >
                  Description:
                </label>





                <textarea onChange={(e)=>handle(e)} id="description"
                  cols="30"
                  rows="10"
                  placeholder="write here.."
                  value={data.description}
                  className="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                ></textarea>
              </div>
              
      <div className="rounded-md border border-gray-100 bg-white p-4 shadow-md">
        <label htmlFor="upload" className="flex flex-col items-center gap-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-gray-600 font-medium">Upload file</span>
        </label>
        <input id="image" value={data.image} type="text" className="" />
      </div>
              <div>
                <label htmlFor="name" className="text-lx font-serif">
                  Nom de la plante:
                </label>





                <input
                  type="text"
                  placeholder="name"
                  onChange={(e)=>handle(e)}
                  id="name"
                  value={data.name}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="name" className="text-lx font-serif">
                  adresse
                </label>





                <input
                  type="text"
                  placeholder="adresse"
                  onChange={(e)=>handle(e)}
                  id="adresse"
                  value={data.adresse}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
            
              <button className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600">
  submit
</button>

        


            </div>
          </div>
        </div>
      </form></div>


    );
  
}

//     const handleSubmit = (e) => {
//      e.preventDefault();
//      createPost(title, description, name, email);
//  };
  function createPost(title, description, name, email) {
    const data = {
        title: title,
        description: description,
        name: name,
        email: email
    };
    axios.post('/localhost:3000/posts', data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
}

 
export default CreerPost