import styled from 'styled-components'

export const DirectionItemButton = styled.button`
color:#334155
font-weight:400;
opacity:${props => (props.clicked ? 1 : 0.5)};
margin-right:20px;
border-style: none;
border-radius: 2px;
padding: 20px;
`
