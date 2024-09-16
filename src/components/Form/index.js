import { useState } from "react"

export default function Counter(){
    const [text, setText] = useState('');
        return (
            <>
                <label>Preencha aqui</label>
                <input onChange={(e) => setText(e.target.value)}/>
                <button onClick={() => console.log(text)}>Enviar</button>
            </>
        )
}