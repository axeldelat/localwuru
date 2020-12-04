import React,{useEffect,useState} from 'react'
import { useRouter } from 'next/router'

function SearchBar(){
        const onClick = (e) => {
          //const router = useRouter()
          // e.preventDefault();
          // console.log(keyword, location);

          // const url = `/search?term=${keyword}&location=${location}`;
          // console.log(url);

          // router.push('localhost:3000/searchResults');
        };
        return (
            <form id="searchContainer" className="flex absolute">
            <input className="searchBar h-10 rounded-sm" placeholder="Busca por ciudad"/>
            <img src="/images/Search.svg" className="relative right-7 cursor-pointer"/>
            </form>
        );
}
//errores !

export default SearchBar
