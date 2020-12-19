import Head from 'next/head'
import styles from '../styles/sass/style.scss'

import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExperienceCard from '../components/ExperienceCard'
import Link from 'next/link'

//Components
import SearchBar from '../components/SearchBar'


import { useRouter } from 'next/router'
import { route } from 'next/dist/next-server/server/router'

export default function App(){

  const router = useRouter()
  const [experiences,setExperiences] = useState([])
  const [search, setSearch] = useState(router.query.keyword)
  const [query,setQuery] = useState('Monterrey')
  useEffect(()=>{
    getExperiences()
  },[])
  //setSearch(router.query)
  const getExperiences = async ()=>{
    const response = await fetch(`https://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences`)
    const data = await response.json()
    let allExperiences = data.data.experiences
    if (search !== ''){
      let filteredExperiences = allExperiences.filter(ExperienceCard =>{
        return ExperienceCard.city === search
      })
      setExperiences(filteredExperiences)
    } else{
      setExperiences(allExperiences)
    }
    // console.log(filteredExperiences)
  }


  return(

    <div className="App">
      <Navbar/>
      <main className="w-screen mx-auto bg-gradient-to-b from-red-100 from-purple-100 p-10 md:p-20">
        <SearchBar />
      </main>

      <Footer/>
    </div>
  )
}

