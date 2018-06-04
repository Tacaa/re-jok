import styled, {css} from 'styled-components';


//=================== List ===================
export const StyledList = styled.div`
  font-size: 1.4rem;
  line-height: 1.5;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  color: rgba(0,0,0,.65);
  box-sizing: border-box;


  & * {
    outline: none;

  }

`
// ==================== List Item =================
export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  line-height: 1.8rem;
  cursor: ${props => props.selection ? "pointer" : "default"};

  border-bottom: ${props => props.divided ? ".1rem solid #e8e8e8" : "none"};

  ${
    props =>
      props.selection
      ? css`
         &:hover{
           background: rgba(0,0,0,.02);
         }
      `
      : null
  }
`
// =================== List Content ==================
export const StyledListContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex: 1 1 60%;

`
export const StyledListContentContainer = styled.div`
  // flex: 1;
  // align-items: flex-start;
`

export const StyledListContentHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const StyledListContentDescription = styled.div`

color: rgba(0,0,0,.68);
font-size: 1.4rem;
line-height: 2rem;
font-weight: 400;
`

export const StyledListContentAction = styled.div`
  display: flex;
  flex: 1 1 30%;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: flex-start;

`
