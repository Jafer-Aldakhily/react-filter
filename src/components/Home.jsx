import React, { useEffect, useState } from 'react'
import data from '../data.json'

export default function Home() {
    const [search,setSearch] = useState("")
    const [price,setPrice] = useState(0)
    const [books,setBooks] = useState(data)

    // useEffect(() => {
    //     if(search)
    //     {
    //         const result = books?.eBooks?.filter(book => book.language.toLowerCase().includes(search)).map(book => book)
    //         // console.log(result);
    //         setBooks(result)
    //         console.log(result);
    //     }else{
    //         setBooks(books)
    //     }
    // },[search])

    const filterByPrice = (e) => {
        setPrice(e.target.value) 
        const filteredData = books?.eBooks?.filter(book => book.price == price)
        console.log(filteredData)
        // setBooks(filteredData)
        // console.log(books);
    }


    return (
        <>
        
          <div style={{width:"400px" }}>
            <h1>search</h1>
            <input type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
            <select 
            onChange={filterByPrice}>
                <option value="all">All books</option>
                <option value="10">Book price 10 $</option>
                <option value="20">Book price 20 $</option>
                <option value="30">Book price 30 $</option>
            </select>
            </div>
            
        
        <div style={{
            display: "flex", marginTop: "20px", flexWrap: "wrap"
        }}>
                {books?.eBooks?.filter(book => {
                    if(search)
                    {
                        return book.language.toLowerCase().includes(search)
                    }else if (price)
                    {
                        return price != "all" ? book.price == price : book
                    }else{
                        return book
                    }
                    }).map((book,index) => {
                    return (
                            <div key={index} className="card" style={{ width: "300px", margin: "20px", marginLeft: "20px" }}>
    
                                <div className="card-body">
                                    <h5 className="card-title">language :{book.language} </h5>
                                    <h5 className="card-title">edition :{book.edition} </h5>
    
                                    <h5 className="card-title">price :{book.price} </h5>
    
                                </div>
                            </div>
                    );
                })}
            </div>

            </>
    );
}