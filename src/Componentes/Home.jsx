/* eslint-disable react/prop-types */
import Card from "./Card"


// eslint-disable-next-line no-unused-vars
export function Home() {

    return (
        <div>
            <main className="flex-shrink-0">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container px-5">
                        <a className="navbar-brand" href="index.html">Mix Peliculas</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="index.html">Accion</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">Terror</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Comedia</a></li>
                                <li className="nav-item"><a className="nav-link" href="pricing.html">Romance</a></li>
                                <li className="nav-item"><a className="nav-link" href="faq.html">FAQ</a></li>

                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="bg-dark py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-white mb-2">Los mejores estrenos en todos los generos 2023</h1>
                                    <p className="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Trailer</a>
                                        <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://img.ecartelera.com/noticias/71700/71720-h4.jpg" alt="..." /></div>
                        </div>
                    </div>
                </header>
            </main>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <footer className="bg-dark py-4 mt-auto">
                    <div className="container px-5">
                        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Mix Peliculas Carlos Botero & venezuela 2023</div></div>
                            <div className="col-auto">
                                <a className="link-light small" href="#!">Privacy</a>
                                <span className="text-white mx-1">&middot;</span>
                                <a className="link-light small" href="#!">Terms</a>
                                <span className="text-white mx-1">&middot;</span>
                                <a className="link-light small" href="#!">Contact</a>
                            </div>
                        </div>
                    </div>
                </footer>
        </div>
    )
}







