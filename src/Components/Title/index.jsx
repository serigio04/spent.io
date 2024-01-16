import styled from "styled-components";

const Title = styled.h1`
  color: ${ ({theme}) => theme.text};
  padding: 25px 0;
`

// const Title = ({ children }) => {
//   return <h1 className="title">{children}</h1>;
// };
export default Title;