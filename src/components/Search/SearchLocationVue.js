import React from 'react';
import SearchSuggest from './SearchSuggest';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    box-sizing: border-box;
    border: 1px solid #3C3440;
    border-radius: 6px;
    &:focus{
        outline: none;
    }
`;


class SearchLocationVue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lastInputChange: new Date()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.suggestion = null;
    }

    handleChange(event) {
        const inputValue = event.target.value;
        this.setState({value: inputValue});
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - this.state.lastInputChange.getTime();

        // Minimum of 200ms between two api call
        if(timeDiff > 200){
            this.setState({lastInputChange: new Date()});
            this.props.autoCompleteHandle(inputValue);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.suggestion = null;
        this.props.getWeather(this.state.value);
        this.setState({ value: ''});
    }

    render() {
        if(this.props.autoCompleteData){
            this.suggestion = this.props.autoCompleteData.map(item => {
                return (
                    <SearchSuggest key={item.id} name={item.name} url={item.url} click={(url) => this.props.getWeather(url)}/>
                );
            })
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <StyledInput
                    type="text"
                    placeholder="Rechercher"
                    value={this.state.value}
                    onChange={this.handleChange} />
                <input type="submit" value="Submit" style={{display: 'none'}}/>
                {this.suggestion ? this.suggestion : null}
            </form>
        );
    }
}

export default SearchLocationVue;
