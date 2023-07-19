import './Loader.css'

function Loader() {
  return (
  <div className="loader">
	<div className="loader-inner">
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
		<div className="loader-line-wrap">
			<div className="loader-line"></div>
		</div>
	</div>
  <p>Loading definition</p>
</div>
  )
}

export default Loader