export const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="-">Tienda Moreno</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="-">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="-">NOSOTROS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="-">PRODUCTOS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="-" tabindex="-1" aria-disabled="true">ENVIOS</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="-" tabindex="-1" aria-disabled="true">CONTACTO</a>
                                        </li>
                                        </ul>
                                        </div>
                                        </div>
    </nav>
    )
}
