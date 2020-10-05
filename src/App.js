import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';
import PaletteList from './PaletteList';


function findPalette(id){
    return seedColors.find(function(palette){
        return palette.id === id;
    })
}

function App(){
    return (
        <Switch>
            <Route exact path="/" render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors} />}/>
            <Route exact path="/palette/:id" 
                render={(routeProps) => {
                        return <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>
                    }}
            />
            <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Single ColorPage</h1>}/> 
        </Switch>
    );
}

export default App;
