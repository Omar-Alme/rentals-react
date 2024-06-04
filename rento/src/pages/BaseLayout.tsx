import { Header, Navbar, Loading } from "@/components";
import { Outlet, useNavigation } from "react-router-dom";

const BaseLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';

    return (
    <>
    
        <Header/>
        <Navbar/> 

        <div className="align-element py-20">
            {isPageLoading ? <Loading/> : <Outlet/>}
        </div>
        
    </>
    );
};
export default BaseLayout;