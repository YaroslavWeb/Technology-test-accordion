import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import { BaseLayout } from "layouts/Base";
import { HomePage } from "pages/Home";

import MainStyles from "./styles/main";

const GlobalStyles = createGlobalStyle`
  ${MainStyles}
`;

function App() {
  return (
    <>
      <Switch>
        <BaseLayout>
          <Route exact path="/">
            <HomePage />
          </Route>
        </BaseLayout>
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
