class Toolbar extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <link rel="stylesheet" href="../css/toolbar-style.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <header>
            <div class="logo">
                <img src="../images/logo.png">
            </div>
            <ul>
                <li> <a href="./index.html">Home</a>  </li>
                <li><a href="./filmes.html">Filmes</li>
                <li><a href="./series.html">Séries</li>
                <li><a href="./login.html">Login</a></li>
            </ul>
            <div class="spacer"></div>
            <div class="busca">
                <input type="text" placeholder="Search a movie">
                <button class="submit">
                    <i id="search" style="color: black;" class="material-icons">search</i>
                </button>
            </div>
        </header>`
    }
}

customElements.define('sith-toolbar', Toolbar)
