import { fontSize } from "@/themes/sizes";
import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    gap: ${fontSize['3xl']}px;
    align-items: center;
`;