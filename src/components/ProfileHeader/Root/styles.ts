import { fontSize } from "@/themes/sizes";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.primary};
    flex-direction: column;
    justify-content: space-between;
    gap: ${fontSize['2xl']}px;
    align-items: flex-start;
    width: 100%;
    padding: ${fontSize['2xl']}px;
`;