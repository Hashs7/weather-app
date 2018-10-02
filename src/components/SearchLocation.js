import React from 'react';
// getWeather

class SearchLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getWeather(this.state.value)
    }

    render() {
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
            </form>
        );
    }
}

export default SearchLocation;
