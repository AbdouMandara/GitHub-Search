import type GitHubUser from '../types/GitHubUser'

interface Props {
  user  : GitHubUser|undefined;

}
function AccountItem({user}: Props) {
  return (
    <>
    {user && 
    <div className="mockup-browser bg-base-100 w-full border border-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">{user.html_url}</div>
      </div>
      <div className="grid place-content-center h-80">Hello</div>
    </div>
    }
    </>
  )
}

export default AccountItem