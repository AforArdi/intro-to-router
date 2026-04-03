import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Root = () => {
    return ( 
        <div>
            <Header></Header>
            <div className="flex gap-5 justify-center">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Root;