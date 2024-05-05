import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.gradientColor1}, ${props.gradientColor2})`};
  background-size: cover;
  height: 100vh;
`
export const GenerateHeading = styled.h1`
  font-family: Roboto;
  font-size: 40px;
  color: #ffffff;
`

export const ChoosePara = styled.p`
  color: #ededed;
  text-align: center;
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`

export const GradientDirectionListItem = styled.li`
  list-style: none;
`

export const GeneralContainer2 = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  border-style: none;
`

export const InputContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`

export const LabelElement = styled.p`
  color: #ffffff;
  margin: 20px;
`
export const InputColor = styled.input`
  padding: 0px;
  border-style: none;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  text-align: center;
  margin: 20px;
  border-style: none;
  padding: 20px;
`
