import styled from '@emotion/styled';

const Container = styled.div`
    background-image: url('/images/pattern-bg.png');
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.h1`
    margin: 0;
    padding-top: 30px;
    color: white;
`;

const Search = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;
`;

const SearchBar = styled.input`
    font-size: 18px;
    padding: 10px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    width: 400px;
    :focus{
        outline: none;
    }
`;

const SearchBtn = styled.input`
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    color: #ffffff;
    background-color: black;
    cursor: pointer;
`;

const sendIp = () =>{
    console.log('Holiss');
}

const header = () => {
    return (
        <Container>
            <Title>IP Address Tracker</Title>
            <Search>
                <SearchBar type="text" placeholder='Search for any IP address or domain'></SearchBar>
                <SearchBtn
                    type='submit'
                    value='>'
                    onClick={() => sendIp()}
                ></SearchBtn>
            </Search>
        </Container>
    );
}

export default header;