import logo from '../logo.svg';
import '../App.css';
import Navbar from '../Navbar/Navbar';

function Profil() {

    return (
      <div className="App">
        <Navbar />
        <div class="maDiv">
        <img src="https://html.com/wp-content/uploads/flamingo.jpg" className="monImage"  alt="Description de l'image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
      <p>Farhati Mohamed</p>
      <p>12 chemin des sales terroriste, 69200</p>
      <p>jaipeurdestrou@gmail.com</p>
        </div>

        <div class="mid">
        <img src="https://html.com/wp-content/uploads/flamingo.jpg" className="monImage"  alt="Description de l'image" style={{ maxWidth: '50%', maxHeight: '50%' }} />
      <p>Farhati 45bd</p>
      <p>12 chemin des sales terroriste, 69200</p>
      <p>jaipeurdestrou@gmail.com</p>
        </div>

      </div>

      
    );
  }
  

export default Profil;