import styled from '@emotion/styled';

const Container = styled.div`
    background-image: url('/images/pattern-bg.png');
`;

const Title = styled.h1`
    margin: 0;
    color: white;
`;

const header = () => {
    return (
        <Container>
            <Title>IP Address Tracker</Title>
        </Container>
    );
}

export default header;