export default interface GitHubUser {
    id : number;
    login:string;
    name : string;
    bio : string;
    avatar_url : string;
    followers : number;
    following : number;
    score : number;
    html_url : string;
    public_repos : number;
}

