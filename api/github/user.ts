export default async function handler(req:any,res:any){

  const {login}=req.query


  if(!login){
    return res.status(400).json({
      message:"Login manquant"
    })
  }
  const url = `https://api.github.com/users/${encodeURIComponent(login)}`
  try{
    const response = await fetch(url,{
      headers:{
        Authorization:`token ${process.env.GITHUB_TOKEN}`
      }
    })
    const result = await response.json();
    return res.status(200).json(result);

  }catch(error){
    return res.status(500).json({
      message:"Erreur serveur"
    });

  }

}