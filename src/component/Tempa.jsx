import React, { useEffect, useState } from 'react'
import './Tempa.css';
import image from '../assets/3845731.png'
const Tempa = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Pune')

    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7745f35d7aa9c142b03c2f4d0233445d`
            const response = await fetch(url);
            const jsonres = await response.json();
            console.log(jsonres)
            setCity(jsonres.main)
        }
        fetchapi()
    }, [search])
    return (
        <div >
            <div className='bgedit'>
                <div className='box'>
                    <input className='input_edit'
                        type="search"
                        placeholder='Search City Name'
                        onChange={(e) => { setSearch(e.target.value) }} /><br /><br />


                    <img width={'75px'} src={image} alt="" />
                    {!city ? (
                        <p>No Data Found</p>
                    ) : (
                        <div >
                            <div style={{ marginTop: '20px' }}>
                                <h1> <i class="fa-solid fa-street-view fa-beat"></i>  {search}</h1>
                            </div>
                            <h2>{city.temp}°Cel</h2>
                            <h4>Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h4>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Tempa