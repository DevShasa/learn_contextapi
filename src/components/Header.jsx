import { NavLink } from "react-router-dom";
import styled from "styled-components"

const Header = ({length}) => {
  return (
    <HeaderContainer>
        <span>Learn some context</span>
        <Navul>
          <ListItem>
              <HeaderLink to="/" className={(isActive)=> isActive ? "active" : undefined}>
                  Home Page
              </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink to="Cart" className={(isActive)=> isActive ? "active" : undefined}>
              Cart({length})
            </HeaderLink>
          </ListItem>
        </Navul>
    </HeaderContainer>
  )
}

export default Header


const HeaderContainer = styled.div`
  font-size: 1.5rem;
  display:flex;
  justify-content: center;
  padding-block: 15px;
  align-items: center;
  & span{
    border: 1px solid black;
    border-radius: 10px;
    padding-inline: 20px;
    padding-block: 10px;
    background-color: #000000;
    color: #ffffff;
  }

`;

const Navul = styled.ul`
  list-style-type: none;
  margin-left: 0;
  display: flex;
  padding-inline: 10px;

  & li + li {
    margin-left: 10px;
  }

`

const ListItem = styled.li`
`;

const HeaderLink = styled(NavLink)`
  text-decoration: none;
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  padding-inline: 20px;
  padding-block: 10px;
  border: 1px solid black;
  &:hover{
    /* background-color: white; */
    /* color:white; */
    /* border: 1px solid black; */
  }

  &.active{
    background: rgb(131,58,180);
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color:white; 
  }
`