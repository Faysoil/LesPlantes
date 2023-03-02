import React from 'react'; 
import IComment from './IComment'; 

export default interface IPost {
    _id : String; 
    title : String; 
    date: Date; 
    idUser: string; 
    comments: Array<IComment>;
    image: string; 
    isGuarded? : string; 
}