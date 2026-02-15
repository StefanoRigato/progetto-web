import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

function MainTemplate(props) {
    const {
        children,
        navItems,
        logo
    } = props;

    return (
        <>
            <Header
                logo={logo}
                navItems={navItems}
            />
            <div className="my-5">

                {children}

            </div>
            <Footer/>
        </>
    )
}

export default MainTemplate;