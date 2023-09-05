/* eslint-disable react/prop-types */
import Card from "./Card"
import Carrusell from "./Carrusell"



// eslint-disable-next-line no-unused-vars
export function Home({ user, setUser }) {

    const handleLogout = () => {
        setUser([])
    }
    return (
        <div className='contenedorUno'>


            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand m-1" href="#">MixPeliculas</a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Terror</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comedia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Acción</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Romance</a>
                    </li>
                    
                </ul>
                
                <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesion</button>

            </nav>
            <Carrusell />
            <Card/>
        </div>
    )
}







