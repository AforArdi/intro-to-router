import { Link, NavLink } from "react-router";

const Header = () => {
    return ( 
        <div>
            <h2>This is Header</h2>
            <nav className="flex gap-5 justify-center">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
            </nav>
        </div>
     );
}
 
export default Header;