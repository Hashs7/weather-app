import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import SVG from 'react-inlinesvg';
import Tappable from 'react-tappable/lib/Tappable';

const StyledIconSvg = styled.div`
    width: 28px;
    height: 28px;
`;

class IconSvg extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isPressed: false
        }
    }

    onPressHandler = () => {
        this.setState({isPressed: true });
    }

    onReleaseHandler = () => {
        this.setState({isPressed: false });
        this.props.click();
    }

    render(){
        const path = `./assets/img/${this.props.name}.svg`;
        return (
            <Spring
                from={{
                    opacity: 0,
                    scale: 1
                }}
                to={{
                    opacity: 1,
                    scale: this.state.isPressed ? 0.8 : 1
                }}
                focusItem={{opacity: 0.5}}
            >
            { props  => (
                <div style={{opacity: props.opacity, transform: `scale3d(${props.scale}, ${props.scale}, ${props.scale}`}}>
                    <Tappable onTouchStart={this.onPressHandler} onTouchEnd={this.onReleaseHandler}>
                        <StyledIconSvg>
                            <SVG src={path} alt="" style={{width: '100%', height: '100%'}}>
                            </SVG>
                        </StyledIconSvg>
                    </Tappable>
                </div>
            )}
            </Spring>
        );
    }

};

export default IconSvg;
