import React, { PropTypes } from 'react'
import { Router,Route, browserHistory} from 'react-router';
import App from './ui/App';
import Login from './ui/auth/Login';
import { Provider } from 'react-redux';
import {store} from './redux/store';
class Routers extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <Route path='/login' component={Login}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

export default Routers;
