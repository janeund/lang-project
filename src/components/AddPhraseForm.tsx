import { useState } from "react";
import type { Phrase } from "../types";


interface AddPhraseFormProps {
    onAddPhrase: (phrase: Phrase) => void
}

export default function AddPhraseForm({ onAddPhrase }: AddPhraseFormProps) {
  const [norwegian, setNorwegian] = useState('');
  const [english, setEnglish] = useState('');
  const [category, setCategory] = useState('');
  
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    const id = Date.now().toString()

    const newPhrase: Phrase = {
      id,
      norwegian,
      english,
      category,
    }; 
    onAddPhrase(newPhrase);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        value={norwegian}
        onChange={(e) => setNorwegian(e.target.value)}
        placeholder="Norsk"
      />
      <input type="text" 
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        placeholder="English"
      />
      <input type="text" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <button type="submit">Add</button>

    </form>
  )
}