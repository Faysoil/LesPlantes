import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Navbar/Navbar';

function Carte() {
    return (
        <div className="AppCarte">
            <Navbar />
            <h1 class="titreCarte"style={{ textAlign: "center", fontSize: "2.5rem", marginTop: "4rem" }}>Trouver des particuliers vers chez vous</h1>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13903.774263755948!2d4.8021488076138805!3d45.77751658185177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1677800771649!5m2!1sfr!2sfr" width="1000" height="850" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Carte;