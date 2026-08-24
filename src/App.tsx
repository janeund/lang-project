import { useState } from "react"
import PhraseList from "./components/PhraseList"
import { initialPhrases } from "./data/phrases"
import type { Phrase } from "./types"
import AddPhraseForm from "./components/AddPhraseForm"

function App() {
  const [ phrases, setPhrases ] = useState<Phrase[]>(initialPhrases)

  function handleAddPhrase(newPhrase: Phrase) {
    setPhrases([...phrases, newPhrase])
  }

  return (
    <>
    <AddPhraseForm onAddPhrase={handleAddPhrase} />
    <PhraseList phrases={phrases}/>
    </>
  )
}

export default App
