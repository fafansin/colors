import React, {Component} from 'react';
import ColorBox from './ColorBox';
import "./Palette.css";
import Navbar from './Navbar';

export default class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level:500};
        this.changeLevel = this.changeLevel.bind(this);
    }
    changeLevel(level){
        this.setState({level})
    }
    render(){
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel}/>
                <div className="Palette-colors">
                    {this.props.palette.colors[this.state.level].map((color) => (
                        <ColorBox key={color.name} background={color.hex} name={color.name} />)
                    )}
                </div>
            </div>
        )
    }
}