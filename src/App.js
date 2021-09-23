import {Routes} from "./routes/Routes"
import {Navigation} from "./components/navigation/Navigation"
import {UserProvider} from './shared/global/provider/UserProvider'

function App() {
  return (
    
    <Routes>
      <Navigation />
    </Routes>
    
  );
}

export default App;
