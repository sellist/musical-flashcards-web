import {Container} from "@mui/material";

import React from "react";
import CSS from "csstype";

const innerStyle : CSS.Properties = {
    display: "grid",
    placeItems: "center",
    height: "95%",
    width: "98%",
}


export default function PageContentContainer({children}: Readonly<{children: React.ReactNode}>) {
    return (
            <Container style={innerStyle}>
                {children}
            </Container>
    )
}