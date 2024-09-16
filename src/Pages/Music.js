import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
 
export default function Music(){
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gravadora, setGravadora] = useState('');
    const [year, setYear] = useState('');
    const [id, setId] = useState(0);

    async function handlePost(event){
        event.preventDefault();       
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: title,
            author: author,
            gravadora: gravadora,
            year: year
        });
        console.log(res)
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setGravadora(res.data.gravadora);
        setYear(res.data.year);
        setId(res.data.id);

    }
 
    return(
        <>
            <form onSubmit={handlePost}>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
                <input value={author} onChange={e=> setAuthor(e.target.value)} />
                <input value={gravadora} onChange={e=> setGravadora(e.target.value)} />
                <input value={year} onChange={e=> setYear(e.target.value)} />
                <button>Enviar</button>
            </form>
            <ul>
                <li>{title}</li>
                <li>{author}</li>
                <li>{gravadora}</li>
                <li>{year}</li>
                <li>{id}</li>
            </ul>
        </>
    )
}