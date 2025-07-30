import { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faMedal, faPlus, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClipboard, faIdCard, faPlayCircle } from '@fortawesome/free-regular-svg-icons';

const navItems=[
    {name:"Accueil", icon: faMedal,  borderColor: "border-gray-500", hoverColor: 'hover:text-gray-500'},
    {name: "Pokédex" , icon: faBookOpen, borderColor:"border-red-500", hoverColor: 'hover:text-red-500'},
    {name: "Jeux vidéos et applis", icon : faPlus, borderColor: "border-orange-500", hoverColor: 'hover:text-orange-500'},
    {name: "Jeu de cartes à collectionner", icon : faIdCard, borderColor: "border-yellow-500", hoverColor: 'hover:text-yellow-500'}, 
    {name: "Dessins animés", icon: faPlayCircle, borderColor: "border-green-500",hoverColor: 'hover:text-green-500'},
    {name:"Evènements play pokemon", icon : faTrophy, borderColor:"border-blue-300", hoverColor: 'hover:text-blue-300'},
    {name:"Actualités", icon : faClipboard, borderColor:"border-blue-500", hoverColor: 'hover:text-blue-500'}
]

function NavBar (){
   return  <nav className="text-gray-500 flex py-4 px-20">
        {navItems.map((item, index) => (
        <button
          key={index}
         className={`flex flex-col items-center justify-around space-y-1 pb-2 border-b-4 ${item.borderColor}  ${item.hoverColor} transition flex-1`}
        >
          <FontAwesomeIcon icon={item.icon} className="text-xl" />
          <span className="text-sm text-center">{item.name}</span>
        </button>
      ))};
    </nav>
}

export default NavBar