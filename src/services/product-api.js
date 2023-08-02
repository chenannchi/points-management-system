const baseUrl = "https://function-1-6gjnjd5fqa-as.a.run.app"

export async function getAllProducts(){
  const res = await fetch(`${baseUrl}/product`)
  return res.json()
}

// export async function getDetails(apiUrl) {
//   const res = await fetch(`${apiUrl}`)
//   return res.json()
// }

// export async function getPilots(urls) {
//   const promises = urls.map(url => fetch(url).then(res => res.json()))
//   const pilotObjects = await Promise.all(promises)
//   return pilotObjects
// }