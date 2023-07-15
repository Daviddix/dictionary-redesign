import backArrow from  "../../../assets/icons/arrow-right.svg"
import SearchBar from "../../Components/SearchBar/SearchBar"
import volume from "../../../assets/icons/volume-2.svg"
import PartOfSpeech from "../../Components/PartOfSpeech/PartOfSpeech"

function ResultsPage() {
  return (
    <main className='results-page-main'>
    <header>
    <button>
        <img src={backArrow} alt="back to home page" />
    </button>

    <SearchBar />
    </header>

    <div className="result-from-search">
        <header>
            <div className="text-and-icon">
                <h1>Apple</h1>
                <button><img src={volume} alt="listen to pronunciation" /> </button>
                <br />
                <i>/applea/</i>
            </div>
        </header>

        <div className="parts-of-speech-container">
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
  )
}

export default ResultsPage