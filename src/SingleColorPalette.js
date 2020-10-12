import React, {Component} from 'react';
import ColorBox from './ColorBox';
import NavBar from './Navbar';
import PaletteFooter from './PaletteFooter';

export default class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state = {
            shades:[],
            format:"hex"
        }
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeFormat(val){
        this.setState({format:val});

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
        const {format} = this.state;
        const {palette} = this.props;
        const colorBoxes = this.state.shades.map(color => {
            return (<ColorBox 
                        showMore={false} 
                        key={color.name} 
                        name={color.name} 
                        background={color[format]} />)
        })
        
        return (
            <div className="Palette">    
                <NavBar 
                    showingAllColors={false}
                    changeFormat={this.changeFormat}/>
                <div className="Palette-colors">{colorBoxes}</div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
            </div>
        )
    }
}