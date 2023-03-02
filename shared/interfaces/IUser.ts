import React from 'react'; 

export default interface IUser {
    _id : string;
    name: string; 
    lastName: string; 
    age: number; 
    telephone: number; 
    email: string; 
    adresse: string; 
    idUser: string; 
    password : string; 
    isBotaniste: boolean; 
    attestation? : string; 
}