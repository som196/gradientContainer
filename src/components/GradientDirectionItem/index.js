import {useState} from 'react'
import {DirectionItemButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirectionDetails, directionClicked} = props
  const {value, displayText} = eachDirectionDetails
  const [clicked, setClicked] = useState(false)

  const directionItemClicked = () => {
    console.log(!clicked)
    setClicked(!clicked)
    directionClicked(value)
  }

  return (
    <DirectionItemButton onClick={directionItemClicked} clicked>
      {displayText}
    </DirectionItemButton>
  )
}

export default GradientDirectionItem
