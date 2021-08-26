import React, {useContext} from 'react'
import CountriesContext from '../context/CountriesContext'


const County = () => {
    const {state} = useContext(CountriesContext)
    return (
        <div>
            {state.country}
        </div>
    )
}

export default County
