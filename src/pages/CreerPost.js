import React, {useState} from 'react'
import '../index.css';
import '../App.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

function CreerPost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add post logic here
    };
  
    return (
    
        <div class="scrollable-container">
        <Navbar />    
      <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-lg font-serif"
                >
                  Description:
                </label>
                <textarea
                  id="description"
                  cols="30"
                  rows="10"
                  placeholder="write here.."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
        <input id="upload" type="file" className="hidden" />
      </div>
              <div>
                <label htmlFor="name" className="text-lx font-serif">
                  Nom de la plante:
                </label>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                />
              </div>
            
              <button className="px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600" onClick={handleSubmit}>
  ADD POST
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