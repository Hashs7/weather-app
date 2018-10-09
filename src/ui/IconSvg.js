import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledIconSvg = styled.div`
    width: 28px;
    height: 28px;
`;

const IconSvg = ({ name, click }) => {
    const path = `./assets/img/${name}.svg`;

    const focusItem = () => {

    }

    return (
        <StyledIconSvg onClick={click}>
            <SVG src={path} alt="" style={{width: '100%', height: '100%'}}>
            </SVG>
        </StyledIconSvg>
    );
};

export default IconSvg;
