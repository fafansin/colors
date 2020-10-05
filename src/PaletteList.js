import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';

export default class PaletterList extends Component{
    render(){
        const {palettes} = this.props;
        return (
            <div className="PaletteList">
                <h1>Palette List</h1>
                {palettes.map(palette =>(
                    <MiniPalette {...palette}/>
                ))}
            </div>
        )
    }
}