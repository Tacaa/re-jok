import styled, {css, keyframes} from 'styled-components'

// ================ Card =================
const opacityCard = keyframes `
0% {

    opacity: 0;
}
100% {
    opacity: 1;
}
`

export const StyledCard = styled.div `

  display: flex;
  flex-direction: column;
  border: .1rem solid rgba(0,0,0,0.1);
  border-radius: .5rem;
  max-width: 100%;

  position: relative;
  font-size: 1.4rem;
  color: rgba(0,0,0,.65);
  margin: 0;


  transition: all .3s;
  box-sizing: border-box;
  list-style: none;
  animation: ${opacityCard} .5s;

  width: ${props => props.numberCard
  ? `calc(${ 100 / props.numberCard}% - 2.4rem)`
  : "33rem"};
  ${
props => props.loading
  ? css `

    padding: 1.4rem;
    height: 40rem;
    border-radius: .5rem;
    `
  : css `
      background: #fff;
      height: 100%;
      padding: 0;
    `}




  ${
props => props.hoverable
  ? css `
       &:hover{
         box-shadow: 0 .2rem .8rem rgba(0,0,0,.09);
         border-color: rgba(0,0,0,.09);
       }
     `
  : null}


`
// ================ Card Group ==============
export const StyledCardGroup = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: -1.4rem -.8rem;
  ${
props => props.center
  ? css `
       justify-content: center;
     `
  : null}
  > ${StyledCard}{
      margin: 1.4rem 1.2rem;
  }
`

// ================= Card Header ==============
export const StyledCardHeader = styled.div `
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  padding: 1.4rem;

  @media (min-width: 70rem){
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
`

export const StyledCardHeaderInfo = styled.div `
   display: flex;
   align-items: center;
   flex: 1 1 70%;

`
export const StyledCardHeaderAction = styled.div `
    flex: 0 0 30%;
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

   & > * {
     margin-right: .6rem;
   }

`

export const StyledCardHeaderText = styled.div `
  display: flex;
  flex-direction: column;


`

export const PrimaryText = styled.span `
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
`

export const SecondaryText = styled.span `
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.4rem;
  font-weight: 200;
  line-height: 2.5rem;

`

//=============== Card Media ===============
export const StyledCardMedia = styled.div `
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 56%;
  background-image: ${props => props.src
  ? `url("${props.src}")`
  : ""};
`

//================ Card Content =============
export const StyledCardContent = styled.div `
   clear: both;
   color: rgba(0,0,0,.68);
   padding: 1.4rem;
   font-size: 1.4rem;
   line-height: 2rem;
   font-weight: 400;

   @media (min-width: 70rem){
     padding-left: 1.6rem;
     padding-right: 1.6rem;
   }
`

export const StyledCardContentTitle = styled.div `
   font-size: 1.6rem;
   color: rgba(0, 0, 0, 0.85);
   font-weight: 600;
   text-overflow: ellipsis;
   overflow: hidden;
   letter-spacing: -.029rem;
   margin-bottom: .5rem;
   white-space: nowrap;
`

export const StyledCardContentSubTitle = styled.div `
font-size: 1.5rem;
color: rgba(0, 0, 0, 0.5);
font-weight: 400;
text-overflow: ellipsis;
overflow: hidden;
letter-spacing: -.029rem;
margin-bottom: .2rem;
white-space: nowrap;
`

//================ Card Action =============
export const StyledCardAction = styled.div `
   display: flex;
   box-sizing: border-box;
   align-items: center;
   padding: .8rem 1rem;


`

export const StyledActionRight = styled.div `
  display: flex;
  flex: 0 0 50%;
  justify-content: flex-start;
  align-items: center;
`

export const StyledActionLeft = styled.div `
  display: flex;
  flex: 0 0 50%;
  justify-content: flex-end;
  align-items: center;
`
//============== CardLoading =================
const placeHolderShimmer = keyframes `
  0% {
    transform: translateX(-468px);
  }

  100% {
    transform: translateX(468px);
  }
  `
export const PlaceHolder = styled.div `
  width: 100%;
  overflow: hidden;
  height: 25.7rem;
  background:#fafafa;
  position: relative;
  &:before{
    content: "";
    background-image: linear-gradient(
      to right,
      rgb(246, 247, 249) 0%,
      rgb(233, 235, 238) 20%,
      rgb(246, 247, 249) 40%,
      rgb(246, 247, 249) 100%
    );
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    animation: 1s ${placeHolderShimmer} linear infinite;
  }
  & div {
    background: #fff;
    position: absolute;
    right: 0;
  }
  `
const baseAvatarLoading = css `
background: #fafafa !important;
width: 4rem;
height: 4rem;
border: .8rem solid #fafafa;
top: -.8rem;
left: -.8rem;
`
export const AvatarLoading = styled.div `
${baseAvatarLoading}
`

export const AvatarRoundLoading = styled.div `
    ${baseAvatarLoading}
  border-radius: 50%;

  `

export const DividerLoading = styled.div `
  height: ${props => `${props.height / 10}rem`};
  top: ${props => `${props.top / 10}rem`};
  left: ${props => `${props.left / 10}rem`};
`
export const ContentLoading = styled.div `
  height: ${props => `${props.height / 10}rem`};
  top: ${props => `${props.top / 10}rem`};
  left: ${props => `${props.left / 10}rem`};
`

export const NameCardLoading = styled.div `
  height: 6px;
  top: 8px;
  left: 136px;
  `
export const DateCardLoading = styled.div `
  height: 6px;
  top: 26px;
  left: 100px;
  `
