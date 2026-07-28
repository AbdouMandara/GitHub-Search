import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import GET from './api/GitHubData'
import type GitHubUser from './types/GitHubUser'
import AccountList from './components/AccountList'

function App() {
  const [name, setName] = useState<string>('')
  const [list_users, setList_users] = useState<GitHubUser[] | null>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await GET(name)
      setList_users(result)
    }
    fetchData()
  }, [name])
  
  return (
    <div className='w-screen h-full flex flex-col justify-center items-center p-6'>
      <SearchBar name={name} onNameChange={setName}/>
      <AccountList users={list_users} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default App
