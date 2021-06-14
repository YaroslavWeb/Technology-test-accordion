import styled from "styled-components";

interface DividerProps {
  height?: number;
  heightMob?: number;
  width?: number;
  widthMob?: number;
}

export const Divider = styled.span<DividerProps>`
  display: inline-block;
  height: ${(props) => props.height || 24}px;
  width: ${(props) => props.width || 24}px;

  @media ${(props) => props.theme.media.large} {
    height: ${(props) => props.heightMob || 12}px;
    width: ${(props) => props.widthMob || 12}px;
  }
`;
