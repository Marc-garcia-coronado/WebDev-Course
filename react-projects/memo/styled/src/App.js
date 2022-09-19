import styled from "styled-components";

const P = styled.p`
  font-size: 24px;
  color: red;
  
`
const Content = styled.div`
  padding: 20px 25px;
`
const Button = styled.button`
  background-color: ${props => props.primary ? "red" : "white"};
  color: ${props => props.primary ? "white" : "red"};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  transition: box-shadow .2s ease;

  &:hover{
    box-shadow: 1px 2px 5px rgb(0,0,0,0.7);
  }

  &.secondary {
    background-color: blue;  
    border: solid 2px blue;
    color: white;
  }

  .info {
    font-size: 24px;
  }
`

const BlockButton = styled(Button)`
  font-size: 24px;
  width: 100%;
`

const Link = ({className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

function App() {
  return (
    <Content>
      <P>hoal</P>
      <Button>Enviar<p className="info">info</p></Button>
      <Button primary >Enviar</Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton primary as="a" href="#">Block</BlockButton>
      <BlockButton primary >Block</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con style</StyledLink>
    </Content>
  );
}

export default App;
