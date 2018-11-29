import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import Counter from "./counter"

ReactDOM.render(
  <AppContainer>
    <Counter />
  </AppContainer>,
  document.getElementById("react-root")
)
