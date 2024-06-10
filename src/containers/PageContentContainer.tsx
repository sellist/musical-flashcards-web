import {Container} from "@mui/material";

import React, {ReactElement} from "react";
import CSS from "csstype";

export default function PageContentContainer({children, styles}: Readonly<{children: React.ReactNode, styles?: CSS.Properties}>) : ReactElement {
    return (
            <Container style={styles}>
                {children}
            </Container>
    )
}