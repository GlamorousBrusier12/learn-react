import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./searchparams2";
import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Link, Route , Switch } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
const App = () => {
  const theme = useState("green");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          {/* using switch will match the first 
          matching route so place the routes accordingly */}
          <Switch>
            <Route path='/details/:id'>
              <Details/>
            </Route>
            <Route path='/'>
              <header>
                <Link to='/'>
                  <h1>This is Yaparam</h1>
                </Link>
              </header>
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
<StrictMode>
  <App />
</StrictMode>
  
, document.getElementById("root"));
