import { useState, useEffect } from "react"
import PhraseList from "./components/PhraseList"
import { initialPhrases } from "./data/phrases"
import type { Phrase } from "./types"
import AddPhraseForm from "./components/AddPhraseForm"

function App() {
  const [ phrases, setPhrases ] = useState<Phrase[]>(() => {
    const saved = localStorage.getItem('phrases')
    return saved ? JSON.parse(saved) : initialPhrases
  })

  function handleAddPhrase(newPhrase: Phrase) {
    setPhrases([...phrases, newPhrase])
  }

  useEffect(() => {
    localStorage.setItem('phrases', JSON.stringify(phrases))
  },[phrases])

  return (
    <>
    <AddPhraseForm onAddPhrase={handleAddPhrase} />
    <PhraseList phrases={phrases}/>
    </>
  )
}

export default App
