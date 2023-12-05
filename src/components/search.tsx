type SearchProps = {
    loadUser : (userName : string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react';

import { BsSearch } from 'react-icons/bs';

import classes from "./search.module.css"

const Search = ({loadUser} : SearchProps) => {
    const [userName,setUserName] = useState("");
    
    const handleKeyDown = (e : KeyboardEvent) =>{
        if(e.key === "Enter"){
            loadUser(userName)
        }
    }



    return (
        <div className={classes.search}>
            <h2>Busque por um usuário</h2>
            <p>Conheça seus melhores repositorios</p>
            <div className={classes.input_group}>
                <input 
                type="text" 
                placeholder="Digite o nome do usuário" 
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={handleKeyDown}
                />
                <button onClick={() => loadUser(userName)}>
                    <BsSearch />
                </button>
            </div>
        </div>
    )
}

export default Search