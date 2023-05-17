import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages from './api'
import ListImage from './components/listImage'



function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className='App'>
      <SearchHeader search={handleSubmit}/>
      <ListImage imagePlaceHolder={images}/>
    </div>
  )
}

export default App
