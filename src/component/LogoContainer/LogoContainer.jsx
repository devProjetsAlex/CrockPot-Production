import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;


@media screen and (max-width: 800px) {
  width: 30%;
  padding: 0;
  left:-20px;
}
`;

export const HeaderContainer = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px;
    min-width:320px) {
    font-size:12px;
    height: 60px;
    width:100%;
    padding: 10px;
    margin-bottom: 30px;
    top:10px;
   
}
`;