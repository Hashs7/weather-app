import React from 'react';
import styled from 'styled-components';


const StyledSearchSuggest = styled.div`
    width: 100%;
    padding: 15px 15px;
    box-sizing: border-box;
    margin: 10px auto;
    border-radius: 8px;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,193,104,1) 0%, rgba(251,128,128,1) 90% );
`;

const SearchSuggest = (props) => {
    return (
        <StyledSearchSuggest onClick={() => props.click(props.url)}>
            <span>{props.name}</span>
        </StyledSearchSuggest>
    );
};

export default SearchSuggest;
