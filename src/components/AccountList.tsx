import type GitHubUser from '../types/GitHubUser'
interface AccountListProps {
    users: GitHubUser[] | null;
    isDisplay: boolean;
    attraper_id_clique : React.Dispatch<React.SetStateAction<GitHubUser | undefined>>
}
function AccountList({users, isDisplay, attraper_id_clique}: AccountListProps) {
    if (isDisplay) {
    return (
        <div className="w-full max-w-xs flex flex-col items-center justify-center gap-2" >
        {users && users.length >=1 ? (
            users.map((user:GitHubUser) => (
                <div key={user.id}>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src={user.avatar_url}/> </div>
                            <div>
                                <div>{user.login.length>8 ? user.login.slice(0, 8)+'...' : user.login}</div>
                                <a className="text-xs uppercase font-semibold opacity-60" href={user.html_url} target='blank'>Voir GitHub</a>
                            </div>
                            <button className="btn btn-ghost" onClick={()=> attraper_id_clique(user)}>Voir plus</button>
                        </li>
                    </ul>
                </div>
            ))
        ):(
            <p>Aucun utilisateur trouvé</p>
        )}
        </div>
    )
    }
    return null
}

export default AccountList