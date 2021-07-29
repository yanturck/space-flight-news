import './styles.css'

function Header () {
    return (
        <header id="header">
            <nav>
                <img src="https://static-00.iconduck.com/assets.00/rocket-icon-512x512-bt0ok16w.png" alt="Space Flight News Logo" />
                <ul className="nav-list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Trending</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;