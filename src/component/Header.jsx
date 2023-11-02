// import '../App.css'

// function Header() {
//     return (
//         <div className="header">
//             <h1>Header Component</h1>
//         </div>
//     );
// }
// export default Header
import "../App.css";
import logoStikom from "../logo_stikom_besar.png";

const Logo = {
    nama:"Logo stikom",
    imageUrl: "",
    imageSize: 90,
};
function Header(){
    return(
        <div className="flex-container" >
            <img
            className="App-logo"
            src={logoStikom}
            alt={"Logo"+Logo.nama}
            style={{ width: Logo.imageSize, height: Logo.imageSize }}
         />
         {/* <h3 className="namalogo">{Logo.nama}</h3> */}
         <div className="menu-items">
          <h2 class="nav-item"><a class="nav-link" href="Header.jsx">Beranda</a></h2>
          <h2 class="nav-item"><a class="nav-link" href="NavBar.jsx">Tentang</a></h2>
          <h2 class="nav-item"><a class="nav-link" href="Layanan.jsx">Layanan</a></h2>
          <h2 class="nav-item"><a class="nav-link" href="Kontak.jsx">contact</a></h2>
          <h2 class="nav-item"><a class="nav-link" href="https://learn.stikombanyuwangi.ac.id/">Login</a></h2>
        </div>
        <div className="header-tengah">
            <h1> Stikom PGRI Banyuwangi</h1>
            <h2> Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416</h2>
        </div>
      </div>
    );
 }
 export default Header;