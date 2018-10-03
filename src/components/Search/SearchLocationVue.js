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
        this.setState({value: event.target.value});
        const currentDate = new Date();
        const timeDiff = currentDate.getTime() - this.state.lastInputChange.getTime();

        // Minimum of 200ms between two api call
        if(timeDiff > 200){
            this.setState({lastInputChange: new Date()});
            this.props.autoCompleteHandle(event.target.value);
        }
        console.log(timeDiff)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getWeather(this.state.value)
    }

    render() {
        let suggestion = null;
        if(this.props.autoCompleteData){
            console.log('ca passe')
            suggestion = this.props.autoCompleteData.map(item => {
                console.log(item);
                return (
                    <SearchSuggest key={item.id} name={item.name}/>
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
