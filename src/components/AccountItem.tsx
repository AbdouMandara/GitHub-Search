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
          <p>{user.bio ? user.bio : user.name + " n'a pas de bio, c'est zarre-bi franchement :("}</p>
          {/* Partie des stats */}
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Abonnes</div>
              <div className="stat-value">{user.followers}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Abonnements</div>
              <div className="stat-value">{user.following}</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-8 w-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Repos pubilcs</div>
              <div className="stat-value">{user.public_repos}</div>
            </div>
          </div>
          {/* Fin partie des stats */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Voir GitHub</button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default AccountItem