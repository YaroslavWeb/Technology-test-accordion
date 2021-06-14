import { PropsWithChildren, ReactNode } from "react";
import { Container, Header, Content, Footer } from "./styles";

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: PropsWithChildren<BaseLayoutProps>) {
  return (
    <Container>
      <Header>
        <div>
          <b>Technology Group</b>
          <sup>Accordionыч</sup>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <div>
          <b>React</b> & <b>Styled Components</b> & <b>Framer Motion</b>
        </div>
      </Footer>
    </Container>
  );
}
