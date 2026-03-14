import { Button } from "@mui/material";
import  styled  from 'styled-components';
import { sitePalette } from '../../../util/siteTheme';

const HeaderButton = styled(Button)` 
    text-transform: none;
    color: ${sitePalette.textOnDark};
    font-weight: 700;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }
`;

const TopBar = styled.div` 
    width: 100%;
    background-color: ${sitePalette.dark};
    color: ${sitePalette.textOnDark};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    min-height: 2.25rem;
    text-transform: none;
`;

const Styled = {HeaderButton, TopBar};
export default Styled;