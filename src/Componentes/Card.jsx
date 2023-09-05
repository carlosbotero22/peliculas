function Card() {
    return (
        <div className="card">
            <section className="py-5">
                <div className="container px-5">
                    <h2 className="fw-bolder fs-5 mb-4">Lo mas reciente...</h2>
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://i.blogs.es/dd46f0/cartel-melanie-the-girl-with-all-the-gifts/1366_2000.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Reproducir</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Blog post title</div></a>
                                    <p className="card-text mb-0">Some quick example text to build on the card title and make up the bulk of thecontent.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://i.blogs.es/5b71be/calendario-peliculas-marvel/1366_2000.jpeg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Reproducir</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">Another blog post title</div></a>
                                    <p className="card-text mb-0">This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk ofs content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="card h-100 shadow border-0">
                                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2GW43GoMgPXcx6m7TOgH8dlX4vn71WwAyA&usqp=CAU" alt="..." />
                                <div className="card-body p-4">
                                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">Reproducir</div>
                                    <a className="text-decoration-none link-dark stretched-link" href="#!"><div className="h5 card-title mb-3">The last blog post title is a little bit longer than the others</div></a>
                                    <p className="card-text mb-0">Some more quick example text to build on the card title and make up the bulk of thecontent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More stories
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card;