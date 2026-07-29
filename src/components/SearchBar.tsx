import type GitHubUser from "../types/GitHubUser";

interface Props {
  name : string;
  onNameChange: (name: string) => void;
  rechercher : any;
  changerTypeUser : React.Dispatch<React.SetStateAction<GitHubUser | undefined>>;
}
function SearchBar({name, onNameChange, rechercher, changerTypeUser}: Props) {

  function mise_a_jour(){
    changerTypeUser(undefined)
    rechercher()
  }
  return (
  <div className="join">
    <div>
      <label className="input validator join-item">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="text" placeholder="Linus Torvalds" value={name} onChange={(e) => onNameChange(e.target.value)} required />
      </label>
      <div className="validator-hint hidden">Entrez au moins 1 lettre</div>
    </div>
  <button className="btn btn-neutral join-item" disabled={name.trim() ==='' ? true : false} onClick={mise_a_jour}>Chercher</button>
</div>
    )   
}

export default SearchBar