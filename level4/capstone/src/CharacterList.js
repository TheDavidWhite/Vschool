import React, { useContext } from "react"
import { ContextApp } from "./Context"

function CharacterList(props) {
    const context = useContext(ContextApp)
    console.log(context.nextPage)
    console.log(context.charactersData)
    const characterArray = context.charactersData
    const characterList = characterArray.map( (character) => 
        <div className="characterCard">
            <div className="imgWrap">
                <img className="charImg" src={character.image}/>
            </div>
            <div className="charCard">
                <h1 className="charName">{character.name}</h1>
            </div>
        </div>
    )
    function loadMore(){
        fetch(context.nextPage)
                .then(res => res.json())
                .then((res) => {
                    context.setCharactersData(prevCharacters => [...prevCharacters, ...res.results])
                    context.setNext(res.info.next)
                })
    }
    return(
        <div className="characters">
            {characterList}
            <button onClick={loadMore}>Load More</button>
        </div>
    )
}
export default CharacterList