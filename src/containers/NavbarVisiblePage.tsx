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
}

const navStyles: CSS.Properties = {
    marginTop: "0"
}

const containerStyles : CSS.Properties = {
    display: "flex",
    flexDirection: "column",
    height: "calc(100vh - var(--nav-bar-height))",
    justifyContent: "center",
}

export default function NavbarVisiblePage({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div style={pageStyles}>
            <div style={navStyles}>
                <NavBar />
            </div>
            <div style={containerStyles}>
                <PageContentContainer>
                    {children}
                </PageContentContainer>
            </div>
        </div>
    )
}