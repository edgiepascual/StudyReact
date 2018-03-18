import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./containers/home/index";

render(<Home />, document.getElementById('app')); 

/*const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));

//https://github.com/valentinogagliardi/webpack-4-quickstart*/