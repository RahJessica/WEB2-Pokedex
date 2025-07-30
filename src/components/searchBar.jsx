import { Fragment, useEffect, useState } from 'react';

function SearchBar() {
    return (
        <div className='flex flex-row gap-10 mt-20 px-10 justify-center bg-gray-700 text-white py-10'>
            <h2 className='font-bold text-2xl'>Nom ou numéro :</h2>
            <input
                type="text"
                placeholder="Rechercher les Pokémons par nom ou numéro"
                className='w-[40vw] px-2 py-2 focus:outline-none border border-gray-100 rounded-sm'
            />
        </div>
    )
}
export default SearchBar