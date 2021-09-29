import React, {useEffect, useState } from 'react'

const useRandomName = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(res => res.results[0].name)
        .then((res) => {setData(res)})
    },[])
   return data
} 


const ShowName = () => {
    
    const data = useRandomName()
    const elem = ('first' in data) ? <div>Имя: {data.first} </div> : <div>loading...</div> 
    return(
        <div className='component'>
            {elem}
        </div>
        
    )
}
export default ShowName