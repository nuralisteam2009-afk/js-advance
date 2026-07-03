import { Link } from "react-router"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="About">
                <button>About</button>
            </Link>
            
        </header>
    );
};

export default Header