import styled from '@emotion/styled';
import React, { Component } from 'react';
import Map from './Map';
import Card from './Card';

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

class search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            ip: []
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        if (this.state.value === ''){
            alert('Empy field');
        }
        else{
            alert('IP: ' + this.state.value);
            fetch(
                `https://geo.ipify.org/api/v1?apiKey=at_V94QccAGWuOWGUzwS6HbuVzPXqpo8&ipAddress=${this.state.value}&domain=${this.state.value}`
              )
                .then((response) => response.json())
                .then((response) => {
                  this.setState({
                    ip: response
                  });
                })
                .catch((error) => console.log(error));
                event.preventDefault();
                this.setState({value: ''});
                console.log(this.state.ip);
        }
    }
    

    render() { 
        return (
        <Container>
            <Title>IP Address Tracker</Title>
            <form onSubmit={this.handleSubmit}>
            <Search>
                <SearchBar type='text' value={this.state.value}
                    onChange={this.handleChange}
                    placeholder='Search for any IP address or domain'
                    required
                >
                </SearchBar>
                <SearchBtn
                    type='submit'
                    value='>'
                >
                </SearchBtn>
            </Search>
            </form>
            <Card
                ipDomain={this.state.value}
            />
            <Map/>
        </Container>
        );
    }
}
 
export default search;