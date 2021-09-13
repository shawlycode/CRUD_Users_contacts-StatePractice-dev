import usersReducers from '../components/Reducers/UsersReducers'
import { createStore, applyMiddleware, compose } from 'redux';
import firebase from '../Firebase/Config';
import { getFirebase, reduxReactFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'react-redux-firestore';
import thunk from 'redux-thunk';



const store = createStore(usersReducers, compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore,
         
         })),
         reduxReactFirebase(firebase),
         reduxFirestore(firebase)
         ));

export default store;