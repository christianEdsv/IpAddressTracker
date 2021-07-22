import React from 'react';
import Search from './components/Search';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  text-align: center;
  width: 100%;
`;

const Card = styled.div`
  text-align: center;
  width: 100%;
`;

const Main = styled.main`
  text-align: center;
  background-color: whitesmoke;
`;

function App() {
  return (
    <Container>
      <Header>
        <Search />
      </Header>
      <Card>
      </Card>
      <Main>
      </Main>
    </Container>
  );
}

export default App;
