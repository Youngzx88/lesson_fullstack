import { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { doSearch } from './api/request'
// import 'antd/dist/antd.css'
// import Cart from './components/cart'

function App() {
  const [userCollection, setUserCollection] = useState([])
  const [filter, setFilter] = useState('')
  const [debounceFilter] = useDebounce(filter, 500)
  // console.log(debounceFilter)
  useEffect(() => {
    if (!filter) {
      return 
    }

    (async() => {
      const {data: {results}} = await doSearch(filter);
      setUserCollection(results)
    })()
   
    // const doSearch = async () => {
    //   // await fetch(`https://swapi.dev/api/people?search=${filter}`)
    //   // .then(response => response.json())
    //   // .then((json) => setUserCollection(json.results))
      
    //   setUserCollection(results)
    // }
    // doSearch()
  }, [debounceFilter])
  return (
    <div className="App">
      {/* <Cart /> */}
      <input value={filter} onChange={
        (e) => setFilter(e.target.value)} />
      <ul>
        {
          userCollection.map(({name}, index) => (
            <li key={index}>{name}</li>
          ))
        }
      </ul>
      {userCollection.length == 0 && <div>没有记录</div>}
    </div>
  )
}

export default App
