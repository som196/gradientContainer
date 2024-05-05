import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  GenerateHeading,
  ChoosePara,
  GeneralContainer,
  GradientDirectionList,
  GradientDirectionListItem,
  GeneralContainer2,
  LabelElement,
  InputColor,
  GenerateButton,
  InputContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [gradientDirection, setGradientDirection] = useState('top')
  const [backgroundColor1, setBackgroundColor1] = useState('#8ae323')
  const [backgroundColor2, setBackgroundColor2] = useState('#014f7b')

  const [tempBackgroundColor1, setTempBackgroundColor1] = useState('#8ae323')
  const [tempBackgroundColor2, setTempBackgroundColor2] = useState('#014f7b')
  const directionClicked = directionValue =>
    setGradientDirection(directionValue)

  const color2Changed = event => setTempBackgroundColor2(event.target.value)
  const color1Changed = event => setTempBackgroundColor1(event.target.value)

  const formSubmitted = event => {
    event.preventDefault()
    setBackgroundColor1(tempBackgroundColor1)
    setBackgroundColor2(tempBackgroundColor2)
  }

  return (
    <MainContainer
      gradientColor1={backgroundColor1}
      gradientColor2={backgroundColor2}
      direction={gradientDirection}
      data-testid="gradientGenerator"
    >
      <GenerateHeading>Generate a CSS Color Gradient</GenerateHeading>
      <ChoosePara>Choose Direction</ChoosePara>
      <GradientDirectionList>
        {gradientDirectionsList.map(eachDirection => (
          <GradientDirectionListItem key={eachDirection.directionId}>
            <GradientDirectionItem
              eachDirectionDetails={eachDirection}
              directionClicked={directionClicked}
            />
          </GradientDirectionListItem>
        ))}
      </GradientDirectionList>
      <GeneralContainer2 onSubmit={formSubmitted}>
        <ChoosePara>Pick the Colors</ChoosePara>
        <GeneralContainer>
          <InputContainer>
            <LabelElement htmlFor="color2">{tempBackgroundColor2}</LabelElement>
            <InputColor
              id="color2"
              type="color"
              value={tempBackgroundColor2}
              onChange={color2Changed}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="color1">{tempBackgroundColor1}</LabelElement>
            <InputColor
              id="color1"
              type="color"
              value={tempBackgroundColor1}
              onChange={color1Changed}
            />
          </InputContainer>
        </GeneralContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
      </GeneralContainer2>
    </MainContainer>
  )
}

export default GradientGenerator
