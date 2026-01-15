import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Amazon</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/state">State</Link>
                            </li>

                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/signup">  <button class="btn btn-outline-warning" type="submit">Signup</button> </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar