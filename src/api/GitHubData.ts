// async function getData(nom_user:string) {
export async function GET(nom_user:string, num_page:number=1) {
  if(nom_user !== '') {
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(nom_user)}&per_page=5&page=${num_page}`;
  try {
    const reponse = await fetch(url,
      {
        headers: {
          // 'Authorization': `token ${process.env.VITE_GITHUB_TOKEN}`
          'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      }
    );
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const resultat = await reponse.json()
    return resultat.items
  } catch (erreur: any) {
    console.error(erreur.message)
  }
  }else{
    return
  }
}

export default GET