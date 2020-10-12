import React, {Component} from 'react';
import ColorBox from './ColorBox';
import "./Palette.css";
import NavBar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class Palette extends Component{
    constructor(props){
        super(props);
        this.state = {level:500, format:'hex'};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level){
        this.setState({level})
    }
    changeFormat(val){
        this.setState({format:val});
    }
    render(){
        const {palette} = this.props;
        return (
            <div className="Palette">
                <NavBar 
                    showingAllColors={true}
                    level={this.state.level} 
                    changeLevel={this.changeLevel}
                    changeFormat={this.changeFormat}/>
                <div className="Palette-colors">
                    {this.props.palette.colors[this.state.level].map((color) => (
                        <ColorBox 
                            showMore={true}
                            paletteId={this.props.palette.id} 
                            id={color.id}
                            key={color.id} 
                            background={color[this.state.format]} 
                            name={color.name} />)
                    )}
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}