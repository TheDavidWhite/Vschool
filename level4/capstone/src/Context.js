import React, { useEffect, useState} from "react"
export const ContextApp = React.createContext()

function ContextProvider(props){ 
        const [charactersData, setCharactersData] = useState([])
        const [nextPage, setNext] = useState("https://rickandmortyapi.com/api/character")
        const [locations, setLocations] = useState()
        const [episodes, setEpisodes] = useState()


        function characterList() {
            fetch(nextPage)
                .then(res => res.json())
                .then((res) => {
                    setCharactersData(prevCharacters => [...prevCharacters, ...res.results])
                    setNext(res.info.next)
                })
            
        }
        useEffect(()=>{
            characterList()
            console.log(charactersData)
        }, [])
        
        return(
            <ContextApp.Provider value={{charactersData, setCharactersData ,characterList, nextPage, setNext}}>
                {props.children}
            </ContextApp.Provider>
        )
}
export default ContextProvider


