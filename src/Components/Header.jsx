import { Link } from "react-router";

const Header = () => {
    return ( 
        <div>
            <h2>This is Header</h2>
            <nav className="flex gap-5 justify-center">
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobiles</Link>
                <Link to='/laptops'>Laptops</Link>
                <Link to='/blogs'>Blogs</Link>
            </nav>
        </div>
     );
}
 
export default Header;