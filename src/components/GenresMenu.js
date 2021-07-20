import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './components.css' 
const GenresMenu = (props) => {
    return (
        <main>
            <input id="menu" type="checkbox"/>
            <span style={{display:'flex', alignItems: 'center'}}>
            <label htmlFor="menu">Categorie <ArrowDropDownIcon className="icon-open"/></label>
            </span>
            <div>
                <ul>
                    {props.genres.map(e=>{return <li>{e.name}</li>})}
                </ul>
                <label htmlFor="menu"><AddCircleIcon className="icon-close"/></label>
            </div>
            
        </main>
    )
}

export default GenresMenu
