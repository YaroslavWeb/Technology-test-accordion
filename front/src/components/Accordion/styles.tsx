import { motion } from "framer-motion";
import styled from "styled-components";

import theme from "styles/theme";

export const AccordionContainer = styled(motion.div)``;

export const AccordionHeader = styled(motion.div)`
  padding: 4px 12px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  cursor: pointer;
  font-size: 1.75em;
  user-select: none;
`;

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke={theme.colors.white}
    strokeLinecap="round"
    {...props}
  />
);

export const AccordionToggle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <Path
      variants={{
        close: { d: "M 9 1 L 9 17" },
        open: { d: "M 1 9 L 17 9" },
      }}
    />
    <Path
      variants={{
        close: { d: "M 1 9 L 17 9", scale: 1 },
        open: { scale: 0 },
      }}
    />
  </svg>
);

export const AccordionContent = styled(motion.div)`
  padding: 12px 16px;
  background: ${theme.colors.white};
`;
