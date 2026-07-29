import { useState } from 'react'
import SearchBar from './components/SearchBar'
import GET from './api/GitHubData'
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
  const [userClique, setUserClique] = useState<GitHubUser>()
  // 
  const fetchData = async (page = num_page) => {
    setIsLoading(true)
    const result = await GET(name, page)
    setList_users(result)
    setIsLoading(false)
    setIsDisplay(true)
  }

  
  return (
    <>
    <Header />
    <div className='w-screen h-full flex flex-col justify-center items-center p-6 gap-4'>
      <SearchBar name={name} onNameChange={setName} rechercher={fetchData}/>
      {isLoading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ):(
        <>
        <AccountList users={list_users} isDisplay={isDisplay} attraper_id_clique={setUserClique}/>
        <PaginationButtons num_page={num_page} modif_page={setNum_page} isDisplay={isDisplay} rechercher={fetchData}/>
        </>
      )}
      <AccountItem user={userClique} />
    </div>
      </>
  )
}

export default App
