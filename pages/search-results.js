import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import styles from '../styles/sass/style.scss'
import Experience from '../components/Experience'
import Link from 'next/link'

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
    console.log("search",search)
    const response = await fetch(`http://belocalwuru-turbulent-hippopotamus-vp.mybluemix.net/experiences`)
    const data = await response.json()
    let allExperiences = data.data.experiences
    if (search !== ''){
      let filteredExperiences = allExperiences.filter(experience =>{
        return experience.city === search
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
      <form id="searchContainer" className="flex absolute">
        <input className="searchBar h-10 rounded-sm" placeholder="Busca por ciudad" onChange={e => setSearch(e.target.value)}/>
        <img src="/images/Search.svg" className="relative right-7 cursor-pointer" onClick={getExperiences}/>
      </form>
        <div className="container mx-auto grid grid-cols-1  gap-4 p-10 md:p-32">
            {experiences.map(experience=>(
              <Link key={experience._id} href={`/experiences/${encodeURIComponent(experience._id)}`} passHref>
                <Experience nameExperience={experience.nameExperience} city={experience.city}/>
              </Link>
            ))}
            {
              experiences.length == 0 ? <div>No se encontro un resultado</div> : ''
            }
        </div>
      <Footer/>
    </div>
  )
}

