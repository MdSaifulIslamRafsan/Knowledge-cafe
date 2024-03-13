import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  const [spentTimes , setSpentTimes] = useState(0);

    const handleBookMarks = (blog) => {
      const newBookmarks = [...bookmarks , blog];
      setBookmarks(newBookmarks);
    }
    const handleSpentTime = (reading_time) =>{
      const newSpentTimes = reading_time + spentTimes;
      setSpentTimes(newSpentTimes);
    }

  return (
    <>
      <Header></Header>
      <main className='grid grid-cols-1 gap-5 lg:grid-cols-12 max-w-[1440px] w-11/12 mx-auto'>
        <Blogs handleSpentTime={handleSpentTime} handleBookMarks ={handleBookMarks}></Blogs>
        <Bookmarks bookmarks={bookmarks} spentTimes={spentTimes}></Bookmarks>     
      </main>
    </>
  )
}

export default App
