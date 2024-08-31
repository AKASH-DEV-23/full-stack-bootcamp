import React, {useEffect,useState} from "react";


export default function Fetch(){
    const[data,setData] = useState(null);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(Response=>Response.json())
        .then(data=> setData(data))
        .catch(error=> console.error('error fetching:',error));  
    },[]);
    return(
        <div>
            <h1>Data:</h1>
            {data? <pre>{JSON.stringify(data,null,2)}</pre>: <p>Loading...</p>}
        </div>
    );
}