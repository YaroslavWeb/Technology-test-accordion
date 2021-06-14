import styled from "styled-components";
import theme from "styles/theme";

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${theme.sizes.headerHeight}px;
  padding: 0 20px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1.75em;
  cursor: default;
  user-select: none;
`;

export const Content = styled.div`
  padding: 20px;
  min-height: calc(100vh - ${theme.sizes.headerHeight}px);
  background: ${theme.colors.secondary};
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  height: ${theme.sizes.footerHeight}px;
  padding: 0 20px;
  background: ${theme.colors.white};
  color: ${theme.colors.primary};
  font-size: 1.25em;
  cursor: default;
  user-select: none;
`;
