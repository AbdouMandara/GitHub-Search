import type GitHubUser from '../types/GitHubUser'
// import AccountItem from './AccountItem'
interface AccountListProps {
    users: GitHubUser[] | null;
}
function AccountList({users}: AccountListProps) {
  return (
    <div className="w-full max-w-xs flex flex-col items-center justify-center gap-2">
      {users && users.length > 0 ? (
          users.map((user:GitHubUser) => (
              <div className="bg-gray-100 p-4 rounded-lg" key={user.id}>
                <p>{user.login}</p>
                <p>{user.nom}</p>
              </div>
          ))
       ):(
           <p>Aucun utilisateur trouvé</p>
        )
      }
    </div>
  )
}

export default AccountList