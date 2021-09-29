import React, {useEffect, useState } from 'react';

const ShowRandomName = () => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const getData = () => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(res => res.results[0].name)
        .then((res) => {
            setData(res)
            setLoading(false)
        })
        
    }
    const onDataChange = () => {
        console.log('onchange')
        setLoading(true)
        getData()
    }
    useEffect(() => {
      console.log('effect')
      getData()
    },[]) 
    let elem;
    const {first, last} = data
    loading ? elem = <div>loading...</div> : elem = <div>Имя: {first} <br/> Фамилия: {last}</div>
    
    return(
        <div className='component'>
        <h2>Рандомное имя</h2>
        {elem}
        <button onClick={onDataChange} style={{marginTop: 30}}>Получить имя</button>
        </div>
    )
}
export default ShowRandomName