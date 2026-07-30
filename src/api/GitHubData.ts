// async function getData(nom_user:string) {
export async function GET(nom_user:string, page:number) {
  if(nom_user !== '') {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(nom_user)}&per_page=5&page=${page}`;
  try {
    const reponse = await fetch(url,
      {
        headers: {
          // 'Authorization': `token ${process.env.VITE_GITHUB_TOKEN}`
          'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }
    )
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const resultat = await reponse.json()
    return resultat
  } catch (erreur: any) {
    console.error(erreur.message)
  }
  }
    return
}

export async function GET_USER(login:string) {
  const url = `https://api.github.com/users/${encodeURIComponent(login)}`;
  try {
    const reponse = await fetch(url,
      {
        headers: {
          // 'Authorization': `token ${process.env.VITE_GITHUB_TOKEN}`
          'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }
    )
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    console.log('Cette methh sexecute')
    const resultat = await reponse.json()
    console.log('resultat de GET : ' + resultat)
    return resultat
  }catch (erreur: any) {
      console.error(erreur.message)
  }
}
export default {GET, GET_USER}