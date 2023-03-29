export default async function getWikiResults(searchTerm: string) {

  const searchParams = new URLSearchParams({
    // Parameters which are required for Wikipedia API
      action: 'query',
      generator: 'search',
      gsrsearch: searchTerm,
      gsrlimit: '20',
      prop: 'pageimages|extracts',
      exchars: '100',
      exintro: 'true',
      explaintext: 'true',
      exlimit: 'max',
      format: 'json',
      origin: '*',
  })

  const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)

  return response.json()
}