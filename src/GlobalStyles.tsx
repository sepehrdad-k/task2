import { createGlobalStyle } from "styled-components";
import samim from "./assets/Samim.woff2";

const GlobalStyles = createGlobalStyle`
@font-face{
    font-family:'samim';
    src:url(${samim})
}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        direction: rtl;
        font-family:'samim';
    }
    body{
        background-color: ${({ theme }) => theme.mainColor};
        display: flex;
        justify-content: center;
    }
`;
export default GlobalStyles;
