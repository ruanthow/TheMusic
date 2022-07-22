import { MainContentContextProvider } from "./components/UseContext/MainContentContext"
import { PlaynowContextsProvider } from "./components/UseContext/PlaynowContext"
import { Home } from "./pages/Home"
import { MyRoutes } from "./routes/router"


function App() {
  return (
    <PlaynowContextsProvider>
    <MainContentContextProvider>
      <div className="App">
        <MyRoutes/>
      </div>
    </MainContentContextProvider>
    </PlaynowContextsProvider>
  )
}

export default App
