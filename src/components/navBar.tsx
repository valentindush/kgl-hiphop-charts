import { useState } from 'react'
import { locations } from '../utils/data'

const NavBar = () => {

    const [location, setLocation] = useState(locations[0])

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLocation(e.target.value)
    }

    return (
        <div className='px-12 py-5 absolute top-0 z-20 w-full'>
            <div className="flex justify-between">
                <a href="/">
                    <div className="logo text-white-primary flex items-center gap-1">
                        <img src='/img/KGL1.svg' alt="" className="w-24-h-24" />

                        <div className="h-1 w-1 bg-white-primary rounded-full"></div>
                        <h3 className='font-semibold text-sm'>HIPHOP CHARTS</h3>
                    </div>
                </a>
                <div className="">
                    <select onChange={(e) => handleLocationChange(e)} className='w-[8rem] p-3 font-semibold appearance-none outline-none ' name="" id="">
                        {locations.map((location, index) => (
                            <option className='' key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>
            </div>

        </div>
    )
}

export default NavBar