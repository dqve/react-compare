import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { AuthContext } from "./context/auth";

//import { history } from './_helpers';
//import { accountService } from './_services';
// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

import App from './App/index';
import * as serviceWorker from './serviceWorker';   
import reducer from './store/reducer';
import config from './config';


const store = createStore(reducer);


// attempt silent token refresh before startup
// accountService.refreshToken().finally(startApp);

function Wrap(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens || "");
    
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }

    return (
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Provider store={store}>
            
                    <BrowserRouter basename={config.basename}>
                        {/* basename="/datta-able" */}
                        <App />
                    </BrowserRouter>
                
            </Provider>
        </AuthContext.Provider>
    )
}

ReactDOM.render(<Wrap />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
