import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogPlantes from './pages/BlogPlantes';
import Messagerie from './pages/Messagerie';
import Carte from './pages/Carte';
import Connexion from './pages/Connexion';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Inscription from './pages/Inscription';
import DataFetching from './pages/DataFetching';
import CreerPost from './pages/CreerPost';
import Planteurs from './pages/Planteurs';
import ReglesConf from './pages/ReglesConf';
import MentionLeg from './pages/MentionLeg';

const router = createBrowserRouter([
{
 path: "/App", 
 element: <App></App>
},
{
  path:"/BlogPlantes",
  element: <BlogPlantes></BlogPlantes>,
},
{
  path:"/Messagerie",
  element: <Messagerie></Messagerie>,
},
{
  path:"/Carte",
  element: <Carte></Carte>,
},
{
  path:"/Profil",
  element: <Profil></Profil>,
},
{
  path:"/",
  element: <Connexion></Connexion>,
},
{
  path:"/Data",
  element: <DataFetching></DataFetching>,
},
{
  path:"/Inscription",
  element: <Inscription></Inscription>
},
{
  path:"/Creer",
  element: <CreerPost></CreerPost>
},
{
  path:"/Planteurs",
  element: <Planteurs></Planteurs>
},
{
  path:"/Post",
  element: <Planteurs></Planteurs>
},
{
  path:"/ReglesConf",
  element: <ReglesConf></ReglesConf>
},
{
  path:"/MentionLeg",
  element: <MentionLeg></MentionLeg>
},


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
