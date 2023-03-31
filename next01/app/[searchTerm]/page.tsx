import getWikiResults from "../../lib/getWikiResults"

type Props = {
  params: {
    searchTerm: string
  }
}
export default async function SearchResults({params: {searchTerm}}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
  const data = await wikiData
  const results: Result[] | undefined = data?.query?.pages
  const content = (
    <main>
      {results
        ? Object.values(results).map(result => {
          return <p>{JSON.stringify(result)}</p>
        })
        : <h2>`${searchTerm}`</h2>
      }
    </main>
  )
  return (
    <div>SearchResults</div>
  )
}