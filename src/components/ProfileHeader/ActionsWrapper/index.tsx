import React from "react";
import { Props } from "./types";
import { View } from "react-native";
import { Container } from "./styles";

export const ActionsWrapper: React.FC<Props> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}