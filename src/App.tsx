import PhraseList from "./components/PhraseList"
import { initialPhrases } from "./data/phrases"

function App() {
  return (
    <>
    <PhraseList phrases={initialPhrases}/>
    </>
  )
}

export default App
