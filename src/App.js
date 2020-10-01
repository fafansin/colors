import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from "./colorHelpers";
import {Route, Switch} from 'react-router-dom';


function findPalette(id){
    return seedColors.find(function(palette){
        return palette.id === id;
    })
}

function App(){
    return (
        <Switch>
            <Route exact path="/" render={() => <h1>Testing</h1>}/>
            <Route exact path="/palette/:id" 
                render={(routeProps) => {
                        return <Palette palette={generatePalette(findPalette(routeProps.match.params.id))}/>
                    }}
            />
        </Switch>
    );
}

export default App;
