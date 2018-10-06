import React from 'react';
import styled from 'styled-components';


const StyledSearchSuggest = styled.div`
    width: 100%;
    padding: 15px 15px;
    box-sizing: border-box;
    margin: 10px auto;
    border-radius: 8px;
    color: #fff;
    background-image: radial-gradient( circle farthest-corner at 12.3% 30.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 120.2% );
`;

const SearchSuggest = (props) => {
    return (
        <StyledSearchSuggest onClick={() => props.click(props.url)}>
            <span>{props.name}</span>
        </StyledSearchSuggest>
    );
};

export default SearchSuggest;
