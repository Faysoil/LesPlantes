import logo from '../logo.svg';
  import '../App.css';
  import Navbar from '../Navbar/Navbar';
  import Footer from '../Navbar/Footer';
  import React, { useState, useEffect, Component } from 'react';
  import { Container } from '@mui/system';
  import axios from 'axios';

  function BlogPlantes(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios
        .get('http://localhost:3000/posts')
        .then(res => {
          console.log(res)
          setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
       
    }, [])


  return (
    
    <div className="scrollable-container" style={{ 

    }}>
      
       <Navbar />  
       <h1 class="titreCarte"style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "2.5rem", marginBottom: "4rem", padding: "1rem" }}>Listes des plantes</h1>
       <div className="search-box">
          <input type="text" className="search" placeholder="Rechercher un article" />
          <button>Rechercher</button>
        </div>
        <div className="dropdown-list">
          <label for="categories">Choisir une catégorie :</label>
          <select name="categories" id="categories">
            <option value="">Toutes les catégories</option>
            <option value="plantes vertes">Plantes vertes</option>
            <option value="plantes fleuries">Plantes grasses</option>
            <option value="cactus et succulentes">Cactus</option>
          </select>
        </div>
       <section class="articles">
            {posts.map(post => (
                  <article>
                    <div class="article-wrapper">
                      <figure>
                        <img src={post.image} alt=""/>
                      </figure>
                      <div class="article-body">
                        <h2>{post.title}</h2>
                        <p>
                        {post.description ? post.description.slice(0, 90) + "..." : ""}
                        </p>
                        <a href="/Planteurs" class="read-more">
                          Lire plus? <span class="sr-only">lire plus?</span>
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
            ))}
                </section>
                <Footer />
      </div>
      
  )
  }
  export default BlogPlantes