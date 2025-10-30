import AppRouter from "./routers/AppRouter";
import { AuthProvider } from "./components/ui/AuthContext";
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default App
