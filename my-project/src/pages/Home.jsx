import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HomeBody from '../components/HomeBody'
import Footer from '../components/Footer'
import Card from '../components/Card'
import axios from 'axios'


function Home() {

  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchUsers() {
    const result = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(result.data)
    setDatas(result.data)
    setIsLoading(false)
  }


  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //       .then((response)=> response.json() )
    //       .then((data)=>{setDatas(data)})
    //       .catch((error)=>{console.log(error)})
    setTimeout(() => {
      fetchUsers()
    }, 4000);
  }, []);

  return (
    <div>
      <Header />
      {
        isLoading === true ? (
          <div className='w-[100%] h-96 bg-gray-800 animate-pulse flex justify-center items-center text-3xl text-white'>
            Loading....
          </div>
        ) : (
          <div className='flex gap-10 p-10 flex-wrap min-w-[400px]'>
            {
              datas.map((user, index) => {
                return <Card key={index} user={user} />
              })
            }
          </div>
        )
      } 
      <Footer />
    </div>
  )
}

export default Home
