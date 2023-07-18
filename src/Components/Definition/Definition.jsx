import "./Definition.css"

function Definition({text, count}) {
  return (
    <div className={count == 0? "first-definition" : "definition"}>
                {count == 0 && <div className="lighter"></div> }
                <p className="text">
                    {count + 1}. {text}
                </p>
            </div>
  )
}

export default Definition