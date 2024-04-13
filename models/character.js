import { response } from "express";

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const timeStamp = process.env.TIMESTAMP;
const hash = process.env.HASH;
const apiUrl = process.env.APIURL;

export default function Search() {
    const [characterName, setCharacterName] = useState('');
    const [characterData, setCharacterData] = useState(null);
    const [comicData, setComicData] = useState(null);


    const handleSubmit = (event) => {
        event.preventDefault();

        getCharacterData(); 
    };

    const getCharacterData = () => {
        setCharacterData(null);
        setComicData(null);

        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

        fetch(url)
        .then(response => response.json())
        .then(result => {
            setCharacterData(result.data);
            console.log(result.data);
        })
        .catch(() => {
            console.log('ERROR GETTING CHARACTER DATA')
        });
    };

    const handleChange = (event) => {
        setCharacterName(event.target.value);
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
};

module.exports = character