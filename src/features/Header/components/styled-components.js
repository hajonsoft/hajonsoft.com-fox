import { Button } from "@mui/material";
import  styled  from 'styled-components';

const HeaderButton = styled(Button)` 
    text-transform: none;
`;

const TopBar = styled.div` 
    width: 100%;
    background-color: rgb(57,63,82);
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2rem;
    text-transform: none;
`;

const Styled = {HeaderButton, TopBar};
export default Styled;