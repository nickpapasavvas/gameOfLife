import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import ReactRedux from 'react-redux';
const redux = require('redux');
const actions = require('./actions/actions.jsx');
const store   = require('./store/configureStore.jsx').configure();
//const RecipeAPI    =   require('./api/RecipeAPI.jsx')
//
import Buttons_And_Board_Cont from 'Buttons_And_Board_Cont.jsx';

ReactDOM.render(
  <Provider store={store}>
    <Buttons_And_Board_Cont/>
  </Provider>,
  document.getElementById('app')
);

//subscribe to changes

//const unsubscribe = store.subscribe( ()=>{
//        let state = store.getState();
//        console.log("state", state);
//        RecipeAPI.setRecipes(state.recipes); 
//    }
//);


//var initialRecipes = RecipeAPI.getRecipes();
//console.log("initialRecipes", initialRecipes)
//store.dispatch(actions.addRecipesAG(initialRecipes));
////check if this is the first rendering of the page
//var initialized = localStorage.getItem('initialized');
//if ( initialized !== 'initialized' ){
//  store.dispatch(actions.expandPanelAG(1));
//  store.dispatch(actions.addRecAG('makaronia', ['makaronia', 'saltsa ntomata']));
//  store.dispatch(actions.addRecAG('spanakoryzo', ['spanaki', 'ryzi']));
//  localStorage.setItem('initialized','initialized');
//}

// Create Actions

//Dispatch the actions
//
store.dispatch(actions.showSmallBoardAG());
store.dispatch(actions.showMediumBoardAG());
store.dispatch(actions.showBigBoardAG());
//store.dispatch(actions.contractPanelAG(1));n