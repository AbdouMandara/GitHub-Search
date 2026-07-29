import type GitHubUser from '../types/GitHubUser'

interface Props {
  user  : GitHubUser|undefined;

}
function AccountItem({user}: Props) {
  return (
    <>
    {user && 
    <div className="mockup-browser bg-base-100 w-full overflow-hidden border border-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">{user.html_url}</div>
      </div>
      {/* Card ou on affiche les infos */}
      <div className="card card-side bg-base-100 p-6 shadow-sm">
        <figure className='h-80'>
          <img
            src={user.avatar_url}
            alt={user.bio} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{user.name}</h2>
          <p>{user.bio}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default AccountItem