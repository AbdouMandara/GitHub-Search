import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import {GET, GET_USER} from './api/GitHubData'
import type GitHubUser from './types/GitHubUser'
import AccountList from './components/AccountList'
import PaginationButtons from './components/PaginationButtons'
import Header from './components/Header'
import AccountItem from './components/AccountItem'

function App() {
  const [name, setName] = useState<string>('')
  const [list_users, setList_users] = useState<GitHubUser[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDisplay, setIsDisplay] = useState<boolean>(false)
  const [num_page, setNum_page] = useState<number>(1)
  const [userClique, setUserClique] = useState<GitHubUser | undefined>()
  const [userDetails, setUserDetails] = useState<GitHubUser | undefined>()
  const [total_compte_fetched, setTotal_compte_fetched] = useState<number>(0)
  
  // Fonction pour fetch les infos du user github sur lequel le user a clique  
  const fetchDataUserClicked = async () =>{
    if(userClique){
      const bio = userClique?.login
      const result = await GET_USER(bio)
      setUserDetails(result)
    }
  }
  useEffect(()=>{
    if(userClique?.login){
      fetchDataUserClicked()
    }
  }, [userClique?.login])

  // Fonction pour fetch les users github selon le nom que le user recherche  
  const fetchData = async (page = num_page) => {
    setIsLoading(true)
    const result = await GET(name, page)
    const items = result.items //Recuperer les differents user de la recherche
    const total_account = result.total_count //recuperer le nombre de compte obtenu
    setTotal_compte_fetched(total_account)
    setList_users(items) 
    setIsLoading(false)
    setIsDisplay(true)
  }
  
  return (
    <>
    <Header />
    <div className='w-screen h-full flex flex-col justify-center items-center p-6 gap-4'>
      <SearchBar name={name} onNameChange={setName} changerTypeUser={setUserClique} onNumPageChange={setNum_page} rechercher={fetchData}/>
      {isLoading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ):(
        <>
        {userClique ? (
          <AccountItem user={userDetails} />
        ):(
          <>
            <AccountList users={list_users} isDisplay={isDisplay} attraper_id_clique={setUserClique}/>
            <PaginationButtons num_page={num_page} modif_page={setNum_page} isDisplay={isDisplay} rechercher={fetchData} nbre_compte={total_compte_fetched}/>
          </>
        )}
        </>
      )}
    </div>
      </>
  )
}

export default App
