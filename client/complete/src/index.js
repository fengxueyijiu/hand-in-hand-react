import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routers from './routes';
injectTapEventPlugin();
render(<Routers />, document.getElementById('root'));
