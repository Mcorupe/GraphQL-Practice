import React from "react"
import { PublicClientApplication } from "@azure/msal-browser"
import { MsalProvider } from " @azure/msal-react"
import { Provider } from "react-import"
import createStore from "./store/createStore"
import { msalConfig } from "./utils/AuthConfig"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./components/theme"

const msalInstance = new PublicClientApplication(msalConfig)

export default ({ element }) => {
  const store = createStore()
  return (
    <ThemeProvider theme={theme}>
      <MsalProvider instance={msalInstance}>{element}</MsalProvider>
      <Provider store={store}> {element} </Provider>
    </ThemeProvider>
  )
}
