import { Header } from "@/components";
import { Outlet } from "react-router-dom";

function BaseLayout() {
    return <>
    
    <Header/>
    <nav></nav>
    <Outlet></Outlet>
    
    
    </>;
  }
  export default BaseLayout;