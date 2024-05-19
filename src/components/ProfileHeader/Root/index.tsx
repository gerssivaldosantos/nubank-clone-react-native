import React from "react";
import { Props } from "./types";
import { Container } from "./styles";

export const Root: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}