import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ExperienceCard from '../ExperienceCard'

// Fontawesome
import { ReactElement } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function SearchBar(){

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
    <>
    {/* //On submit ??*/}
      <form className="grid grid-cols-12 mb-10" onSubmit={getExperiences}>
        <input
          className="rounded-r-none col-span-10 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          name="search"
          type="text"
          required
          autoFocus
          placeholder=""

          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span
        className="rounded-l-none col-span-2 h-full text-center cursor-pointer px-4 py-2 rounded text-white shadow-lg bg-purple-700 hover:bg-purple-900 focus:bg-purple-700"
        onClick={getExperiences}>
        Buscar
        </span>
      </form>
        <div className="grid grid-cols-12 gap-4">
            {experiences.map(experience=>(
              <div className="col-span-3">
                <Link key={experience._id} href={`/experiences/${encodeURIComponent(experience._id)}`} passHref>
                  <a>
                    <ExperienceCard title={experience.title} city={experience.city} state={experience.state} country={experience.country} description={experience.description} imgUrl={experience.imgUrl} />
                  </a>
                </Link>
              </div>
            ))}
            {
              experiences.length == 0 ? <div>No se encontro un resultado</div> : ''
            }
        </div>
    </>
  )
}


