import SearchBar from "../../Components/SearchBar/SearchBar"
import PartOfSpeech from "../../Components/PartOfSpeech/PartOfSpeech"
import "./ResultsPage.css"

function ResultsPage() {
  return (
    <>
  <header className="results-page-header">
    <div className="header-inner">
        <button>

        <svg  
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19">            
        </polyline>
        </svg>
    </button>

    <SearchBar />
    </div>    
    
    </header>

    <main className='results-page-main'>
    

    <div className="result-from-search">
        <header>
            <div className="text-and-icon">
                <h1>Apple</h1>
                <button>
                <svg 
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round" className="feather feather-volume-2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07">
                </path>
                </svg>
                </button>                
            </div>
            <i>/applea/</i>
        </header>

        <div className="parts-of-speech-container">
            <PartOfSpeech />
            <PartOfSpeech />
            <PartOfSpeech />
        </div>

        <div className="definitions">
            <div className="first-definition">
                <div className="lighter"></div>
                <p className="text">
                    1. Any of various tree-borne fruits or vegetables especially considered as resembling an apple, also (with qualifying words) used to form the names of other specific fruits such as custard apple, thorn apple e.t.c
                </p>
            </div>

            <div className="definition">
                <p className="text">
                    2. The fruit of the Tree of Knowledge, eaten by Adam and Eve according to post-Biblical Christian tradition; the forbidden fruit.
                </p>
            </div>

            <div className="definition">
                <p className="text">
                    3. A tree of the genus Malus, especially one cultivated for it's edible fruit; the apple tree
                </p>
            </div>
        </div>

        <p className="external-link">
            Read More: <a href="" target="_blank">https://en.wikionary.org/wiki/apple</a>
        </p>
    </div>
    </main>
    </>
  )
}

export default ResultsPage