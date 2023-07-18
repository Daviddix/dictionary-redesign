import "./Error.css"

function Error() {
  return (
    <div className="err-body">
              <p className="err">Sorry pal, we couldn't find definitions for the word you were looking for.</p>
              <p className="res">Resolution: You can try the search again at later time or head to the web instead.
            Or you can check your internet connection and try again.</p>
            </div>
  )
}

export default Error