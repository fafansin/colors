import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close'; 

export default class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {format:"hex", 
                        open:false}

        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleFormatChange(e){
        this.setState({format:e.target.value, open:true}, () => {
            this.props.changeFormat(this.state.format)}
        );
    }
    closeSnackbar(){
        this.setState({open:false});
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
                    <Select onChange={this.handleFormatChange} value={this.state.format}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255, 0.5)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical:"bottom", horizontal:"left"}} 
                    open={this.state.open}
                    autoHideDuration="300"
                    message={<span id="message-id">Format Changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    action={[
                        <IconButton onClick={this.closeSnackbar} 
                            color="inherit"
                            key="close"
                            aria-label="close"
                            >
                            <CloseIcon />
                        </IconButton>
                    ]}
                    />
            </header>
        )
    }
}