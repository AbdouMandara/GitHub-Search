export async function GET(nom_user:string,page:number){

  const response = await fetch(
    `/api/github/search?nom_user=${nom_user}&page=${page}`
  );
  return await response.json();
}


export async function GET_USER(login:string){
  const response = await fetch(
    `/api/github/user?login=${login}`
  );

  return await response.json();

}