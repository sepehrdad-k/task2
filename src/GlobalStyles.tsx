import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        direction: rtl;
    }
    body{
        background-color: ${({ theme }) => theme.mainColor};
        display: flex;
        justify-content: center;
    }
`;
export default GlobalStyles;
