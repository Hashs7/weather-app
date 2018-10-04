import React from 'react';
import styled from 'styled-components';


const StyledSearchSuggest = styled.div`
    width: 95%;
    height: 40px;
    margin: 10px auto;
    background-color: #FF0000;
`;

const SearchSuggest = (props) => {
    return (
        <StyledSearchSuggest onClick={() => props.click(props.url)}>
            <span>{props.name}</span>
        </StyledSearchSuggest>
    );
};

export default SearchSuggest;
