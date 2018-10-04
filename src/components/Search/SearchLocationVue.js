import React from 'react';
import SearchSuggest from './SearchSuggest';

class SearchLocationVue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lastInputChange: new Date()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.getWeather(this.state.value)
    }

    render() {
        let suggestion = null;
        if(this.props.autoCompleteData){
            suggestion = this.props.autoCompleteData.map(item => {
                return (
                    <SearchSuggest key={item.id} name={item.name} url={item.url} click={(url) => this.props.getWeather(url)}/>
                );
            })
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Votre ville:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
                {suggestion ? suggestion : null}
            </form>
        );
    }
}

export default SearchLocationVue;
