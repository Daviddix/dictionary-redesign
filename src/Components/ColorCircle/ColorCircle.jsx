import  './ColorCircle.css'

function ColorCircle({color,activeAccentColor,setActiveAccentColor,hue}) {

    function handleClick(){
        setActiveAccentColor(color)
        localStorage.setItem("active-accent-color", color)
        localStorage.setItem("accent-hue", hue)

        document.documentElement.style.setProperty('--hue', hue)
    }
  return (
    <button
    onClick={handleClick}
    className={activeAccentColor == color? color + " active" : color}></button>
  )
}

export default ColorCircle