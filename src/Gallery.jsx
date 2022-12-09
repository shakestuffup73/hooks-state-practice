import { useState } from "react"
import { sculptureList } from "./data"

const Gallery = () => {

  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const [disableBtn, setDisableBtn] = useState(false)
  
  let sculpture = sculptureList[index]

  function handleClick() {
    console.log('the index is', index)
    setIndex(index + 1)
    if (index === sculptureList.length-2) {
      setDisableBtn(true)
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore)
  }

  function handlePrevClick() {
    if (index > 0) {
      setIndex(index -1)
      setDisableBtn(false)
    }
  }

  return (
    <div className="card">
      
      <button id="nextBtn" disabled={disableBtn} onClick={() => handleClick()}>
        Next
      </button>
      <button onClick={handlePrevClick}>
        Previous
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      <p>
        {showMore && sculpture.description}
      </p>
    </div>
  )
}

export default Gallery;