import { MainContentContextProvider } from "./components/UseContext/MainContentContext"
import { PlaynowContextsProvider } from "./components/UseContext/PlaynowContext"
import { Home } from "./pages/Home"


function App() {
  return (
    <PlaynowContextsProvider>
    <MainContentContextProvider>
      <div className="App">
        <Home/>
      </div>
    </MainContentContextProvider>
    </PlaynowContextsProvider>
  )
}

export default App
