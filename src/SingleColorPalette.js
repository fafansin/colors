import React, {Component} from 'react';
import ColorBox from './ColorBox';

export default class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state = {
            shades:[]
        }
    }
    componentDidMount(){
        this.setState({shades:this.gatherShades(this.props.palette, this.props.colorId)});
    }
    gatherShades(palette, colorToFilterBy){
        let shades = []
        let allColors = palette.colors;
        
        for(let key in allColors){
            shades.push(allColors[key].filter(color => color.id === colorToFilterBy)[0]);
        }
        return shades.slice(1);
    }
    render(){
        const colorBoxes = this.state.shades.map(color => {
            return (<ColorBox showMore={false} key={color.name} name={color.name} background={color.hex} />)
        })
        
        return (
            <div className="Palette">    
                <h1>Single Color Palette</h1>
                <div className="Palette-colors">{colorBoxes}</div>
            </div>
        )
    }
}