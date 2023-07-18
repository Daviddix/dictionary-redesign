import "./PartOfSpeech.css"

function PartOfSpeech({value, index, setPartOfSpeechIndex, partOfSpeechIndex}) {
  return (
    <button 
    onClick={()=>{
      setPartOfSpeechIndex(index)
    }}
    className={index == partOfSpeechIndex? "part-of-speech active" : "part-of-speech"}>
      <p>{value}</p>
      </button>
  )
}

export default PartOfSpeech