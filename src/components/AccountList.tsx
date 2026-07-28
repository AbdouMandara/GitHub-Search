import type GitHubUser from '../types/GitHubUser'
// import AccountItem from './AccountItem'
interface AccountListProps {
    users: GitHubUser[] | null;
    isDisplay: boolean;
}
function AccountList({users, isDisplay}: AccountListProps) {
    if (isDisplay) {
    return (
        <div className="w-full max-w-xs flex flex-col items-center justify-center gap-2" >
        {users && users.length >=1 ? (
            users.map((user:GitHubUser) => (
                <div key={user.id}>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                        <li className="list-row">
                            <div><img className="size-10 rounded-box" src=`${user.img_avatar}`/> </div>
                            <div>
                            <div>{user.login}</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                            </div>
                            <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                            </button>
                        </li>
                    </ul>
                </div>
            ))
        ):(
            <p>Aucun utilisateur trouvé</p>
        )
        }
        </div>
    )
    }else{
        return null
    }
}

export default AccountList