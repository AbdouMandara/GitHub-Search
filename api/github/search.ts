export default async function handler(req:any, res:any) {

  const { nom_user, page } = req.query;

  if (!nom_user) {
    return res.status(400).json({
      message: "Nom utilisateur manquant"
    });
  }


  const url = `https://api.github.com/search/users?q=${encodeURIComponent(nom_user)}&per_page=5&page=${page}`
  try {

    const response = await fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    });

    const result = await response.json()
    return res.status(200).json(result)


  } catch(error) {

    return res.status(500).json({
      message:"Erreur serveur"
    });

  }
}