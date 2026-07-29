import { useState } from 'react'
import SearchBar from './components/SearchBar'
import GET from './api/GitHubData'
import type GitHubUser from './types/GitHubUser'
import AccountList from './components/AccountList'

function App() {
  const [name, setName] = useState<string>('')
  const [list_users, setList_users] = useState<GitHubUser[] | null>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDisplay, setIsDisplay] = useState<boolean>(false)
  
  const fetchData = async () => {
    setIsLoading(true)
    const result = await GET(name)
    setList_users(result)
    setIsLoading(false)
    setIsDisplay(true)
    }

  
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center p-6 gap-4'>
      <SearchBar name={name} onNameChange={setName} rechercher={fetchData}/>
      {isLoading ? (
        <span className="loading loading-spinner loading-xl"></span>
      ):(
        <AccountList users={list_users} isDisplay={isDisplay} />
      )}
    </div>
  )
}

export default App
