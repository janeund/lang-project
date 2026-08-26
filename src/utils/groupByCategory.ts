import type { Phrase } from "../types"

interface CategoryCount {
  name: string;
  count: number;
}

export function groupByCategory(phrases: Phrase[]): CategoryCount[] {
  const uniqueCategories = Array.from(new Set(phrases.map(phrase => phrase.category)))

  const result = uniqueCategories.map(category => {
    const count = phrases.filter(phrase => phrase.category === category).length
    return {name: category, count}
  })

  return result

}