import { Routes } from "./routes/Routes"
import { Navigation } from "./components/navigation/Navigation"
import { useState } from "react"
import { LoginContext } from './context/LoginContext'

function App() {
  // Sets the useState notLoggedIn to a string containing the text Unknown user.
  const [loggedIn, setloggedIn] = useState("Unknown user.")

  return (
    // LoginContext.Provider wraps around Routes and Navigation and can now be used on every page.
    <LoginContext.Provider value={{loggedIn, setloggedIn}}>
    <Routes>
      <Navigation />
    </Routes>
    </LoginContext.Provider>
  );
}

export default App;