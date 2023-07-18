import SearchBar from "../../Components/SearchBar/SearchBar"
import PartOfSpeech from "../../Components/PartOfSpeech/PartOfSpeech"
import "./ResultsPage.css"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Loader from "../../Components/Loader/Loader"
import Error from "../../Components/Error/Error"
import Definition from "../../Components/Definition/Definition"

function ResultsPage({setRecentWords, recentWords}) {
    const {wordToSearchFor} = useParams()
    const [dataFromFetch, setDataFromFetch] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [partOfSpeechIndex, setPartOfSpeechIndex] = useState(0)
    const audioRef = useRef()
    const navigate = useNavigate()

    useEffect(()=>{
        fetchDataForWord()
    }, [wordToSearchFor])

    function fetchDataForWord(){
        setIsLoading(true)
       fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearchFor}`)
       .then((data)=> data.json())
       .then((result)=>{
        if(result.title){
            throw new Error
        }else{
            setError(false)
            setDataFromFetch(result[0])
            setIsLoading(false)
            setRecentWords((prev)=> [...prev, wordToSearchFor])
            // const newArr = [...recentWords]
            // newArr.push(wordToSearchFor)
            // localStorage.setItem("recent-words-from-dictionary", JSON.stringify(newArr))
        }
        
       })
       .catch((err)=>{
        setError(true)
        setIsLoading(false)
        console.error(err)
       })
    }

    function playAudio(ref){
        ref.current.play()
    }

    function navigateBack(){
        navigate(-1)
    }

    const mappedPartOfSpeech = dataFromFetch && dataFromFetch.meanings.map((meaning, index)=>{
        return <PartOfSpeech 
        setPartOfSpeechIndex={setPartOfSpeechIndex}
        partOfSpeechIndex={partOfSpeechIndex}
        key={index}
        index={index}
        value={meaning.partOfSpeech} />
    })

    const mappedDefinitions = dataFromFetch && dataFromFetch.meanings[partOfSpeechIndex].definitions.map((definition, index)=>{
        if (index <= 3) {
            return <Definition 
            key={definition.definition}
            count={index}
            text={definition.definition} />
        }else{
            return
        }
    })

    

    
  return (
    <>
  <header className="results-page-header">
    <div className="header-inner">
        <button
        onClick={()=>{
            navigateBack()
            console.log("heyy");
        }}
        >

        <svg  
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19">            
        </polyline>
        </svg>
    </button>

    <SearchBar />
    </div>    
    
    </header>

    <main className='results-page-main'>
    

    {error == false? <div className="result-from-search">
        <header>
            <div className="text-and-icon">
                <h1>{dataFromFetch?.word}</h1>
                <button
                onClick={()=> playAudio(audioRef)}
                >
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-volume-2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07">
                </path>
                </svg>
                </button>                
            </div>
            <i>{dataFromFetch?.phonetic}</i>
        </header>

        <div className="parts-of-speech-container">
            {mappedPartOfSpeech}
        </div>

        <div className="definitions">
            {mappedDefinitions}
        </div>

        <p className="external-link">
            Read More: <a href="" target="_blank">{dataFromFetch?.sourceUrls[0]}</a>
        </p>
    </div>: <Error />}
    </main>

    <audio 
    ref={audioRef}
    src={dataFromFetch?.phonetics[0]?.audio}>
    </audio>

    {isLoading && <Loader />}
    </>
  )}

export default ResultsPage