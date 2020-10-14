import React, {Component} from 'react';
import "./ColorBox.css";
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

export default class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = {copied:false};
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied:true}, ()=> {
            setTimeout(() => this.setState({copied:false}), 1500);
        });
    }
    render(){
        const {name, background} = this.props;
        const {copied} = this.state;
        const isDarkColor = chroma(background).luminance() <= 0.08;
        const isLightColor = chroma(background).luminance() >= 0.08;

        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div className="ColorBox" style={{background}}>
                    <div style={{background}} className={`copy-overlay ${copied && 'show'}`}></div>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied!</h1>
                        <p className={`${isLightColor && "dark-text"}`}>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span className={`${isDarkColor && "light-text"}`}>{name}</span>
                        </div>
                        <button className={`see-more ${isLightColor && "dark-text"} copy-button`}>Copy</button>
                    </div>
                    {this.props.showMore && 
                    <Link 
                        to={`/palette/${this.props.paletteId}/${this.props.id}`} 
                        onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && "dark-text"}`}>MORE</span>
                    </Link >
                    }
                </div>
            </CopyToClipboard>
        )
    }
}