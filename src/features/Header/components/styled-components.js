import { Button } from "@mui/material";
import styled from "styled-components";
import { sitePalette } from "../../../util/siteTheme";

const HeaderButton = styled(Button)`
  text-transform: none;
  color: ${sitePalette.text};
  font-weight: 700;
  padding: 0.45rem 0.85rem;
  border-radius: 999px;
  min-width: 0;

  &:hover {
    background-color: ${sitePalette.surfaceAlt};
    color: ${sitePalette.primaryHover};
  }
`;

const Styled = { HeaderButton };
export default Styled;
