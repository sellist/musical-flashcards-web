import React from "react";
import NavBar from "../components/NavBar.tsx";
import CSS from "csstype";
import PageContentContainer from "./PageContentContainer.tsx";


const pageStyles : CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxHeight: "100vh",
    minHeight: "100vh",
    margin: "0",
}

export default function NavbarVisiblePage({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div style={pageStyles}>
            <NavBar />
            <PageContentContainer >
                {children}
            </PageContentContainer>
        </div>
    )
}