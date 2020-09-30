import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {format:"hex"}

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({format:e.target.value}, ()=> this.props.changeFormat(this.state.format));
        
    }
    render(){
        return (
            <header className="Navbar">
                <div className="logo">
                    <a href="google.com">reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={this.props.level} 
                            min={100} 
                            max={900} 
                            step={100} 
                            onAfterChange={this.props.changeLevel}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select onChange={this.handleChange} value={this.state.format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 0.5)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}