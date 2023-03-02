  import logo from '../logo.svg';
  import '../index.css';
  import Navbar from '../Navbar/Navbar';
  import React, { useState, useEffect, Component } from 'react';
  import { Container } from '@mui/system';
  import axios from 'axios';

  function BlogPlantes(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios
        .get('http://localhost:3000/posts')
        .then(res => {
          console.log(res);
          setPosts(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    
    return (
      <div class="scrollable-container">
        <Navbar />  
        <ul>
          {posts.map(post => (
            <section class="articles">
              <article>
                <div class="article-wrapper">
                  <figure>
                    <img src={post.image} alt="" />
                  </figure>
                  <div class="article-body">
                    <h2>{post.title}</h2>
                    <p>
                      {post.description}
                    </p>
                    <a href="./Planteurs" class="read-more">
                      Lire plus? <span class="sr-only"><a href="/Planteurs">lire plus?</a></span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </section>
          ))}
        </ul>
      </div>
    );
  }
  

  export default BlogPlantes