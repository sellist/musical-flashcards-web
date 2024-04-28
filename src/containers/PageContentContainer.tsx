import {Container} from "@mui/material";

import React from "react";
import CSS from "csstype";

const innerStyle : CSS.Properties = {
    // display: "flex",
    // flexDirection: "row",
    // height: "100%",
    // width: "100%",
}


export default function PageContentContainer({children}: Readonly<{children: React.ReactNode}>) {
    return (
            <Container style={innerStyle}>
                {children}
            </Container>
    )
}