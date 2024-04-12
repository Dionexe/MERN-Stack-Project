import { useState } from "react";

export default function Search() {
    const [characterName, setCharacterName] = useState('');

    const handleSubmit = () => {

    };

    const handleReset = () => {

    };

    const handleChange = () => {

    };
    
    return <>
    <form className='search' onSubmit={handleSubmit}>
        <input 
        placeholder="ENTER CHARACTER NAME" 
        type='text' 
        onChange={handleChange}
        />
        <div className='buttons'>
            <button type="submmit">Get Character data</button>
            <button type="reset" className="reset" onClick={handleReset}></button>
        </div>

    </form>
    </>;
}