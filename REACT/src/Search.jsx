import React, { useState } from 'react'

const Search = () => {

    const [item, setItem] = useState('')
    const places = [
        'India', 'USA', 'Japan', 'China', 'Germany', 'France', 'Canada', 'Australia',
        'Brazil', 'Russia', 'UK', 'South Korea', 'Italy', 'Mexico', 'South Africa',
        'Spain', 'Indonesia', 'Turkey', 'Saudi Arabia', 'Argentina'
    ];
    const [filtered, setFiltered] = useState(places.slice(0, 5))


    const handleSubmit = () => {
        setFiltered(places.filter((x) => x.toLowerCase().includes(item.toLowerCase())))
        setItem('')
    }

    const pagination = (num) => {
        const startIndex = (num - 1) * 5;
        setFiltered(places.slice(startIndex, startIndex + 5));
    }

    const totalPages = Math.ceil(places.length/5)
    //5, 10, 11 1+ (n - 1)5
    // 1 + 5n - 5 = 5n - 4
    return (
        <>
            <button onClick={() => setFiltered(places.slices(0, 5))}>HOME</button><input type='text' className='rounded-b-full' value={item} onChange={(e) => setItem(e.target.value)} /><button onClick={handleSubmit}> Search</button>
            <div>
                {filtered.map((country, key) => {
                    return (<li key={key}>{country}</li>)
                })}
            </div>
            {/* {}
            <button onClick={() => pagination(1)}>1</button>
            <button onClick={() => pagination(2)}>2</button>
            <button onClick={() => pagination(3)}>3</button>
            <button onClick={() => pagination(4)}>4</button> */}
            <div className='py-1'>
                {Array.from({length: totalPages}, (_, i)=> (
                          <button onClick={() => pagination(i+1)}>{i+1}</button>
                ))}
            </div>
        </>
    )
}

export default Search
