export function getLinksSave(key) {
  const myLinks = localStorage.getItem(key)
  return JSON.parse(myLinks) || []
}

export function saveLink(key, newLink) {
  const linksStored = getLinksSave(key)
  const hasLink = linksStored.some(link => link.id === newLink.id)
  if (hasLink) return
  linksStored.push(newLink)
  localStorage.setItem(key, JSON.stringify(linksStored))
}

export function deleteLink(links, id) {
  const myLinks = links.filter(item => item.id !== id)
  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  return myLinks
}
