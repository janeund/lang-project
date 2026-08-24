import type { Phrase } from "../types";

export interface PhraseListProps {
  phrases: Phrase[]
}

export default function PhraseList( { phrases }: PhraseListProps) {
  return (
    <ul>
      {phrases.map(phrase => <li key={phrase.id}>{phrase.norwegian} - {phrase.english}</li>)}
    </ul>
  )
}