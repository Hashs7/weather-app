import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import SVG from 'react-inlinesvg';
import Tappable from 'react-tappable/lib/Tappable';



class IconSvg extends React.Component {
    constructor (props){
        super(props);
        this.state = { isPressed: false }
    }

    onPressHandler = () => {
        this.setState({isPressed: true });
    }

    onReleaseHandler = (e) => {
        this.props.click(e);
        this.setState({isPressed: false });
    }

    onLeave = () => {
        this.setState({isPressed: false });
    }

    render(){
        const { name, isActive, width } = this.props;
        const path = `./assets/img/ui/${name}.svg`;
        const StyledIconSvg = styled.div`
            width: ${width}px;
            height: ${width}px;
            padding: ${34 - width}px;
            display: inline-block;
            vertical-align: middle;
            
            & .isvg svg {
                display: inline-block;
                vertical-align: top;
                & .fill {
                    fill: ${isActive ? '#3c3440' : '#FFF'};
                }
                & .stroke {
                    fill: #3c3440
                }
            }
        `;

        return (
            <Spring
                from={{
                    scale: 0.5
                }}
                to={{
                    scale: this.state.isPressed ? 0.8 : 1
                }}
            >
            { props  => (
                <Tappable
                    style={{opacity: props.opacity, transform: `scale3d(${props.scale}, ${props.scale}, ${props.scale}`}}
                    onMouseEnter={this.onPressHandler}
                    onTap={this.onReleaseHandler}
                    onMouseLeave={this.onLeave}
                >
                    <StyledIconSvg>
                        <SVG src={path} style={{width: '100%', height: '100%', fill: this.props.color}}>
                        </SVG>
                    </StyledIconSvg>
                </Tappable>
            )}
            </Spring>
        );
    }

};

export default IconSvg;
