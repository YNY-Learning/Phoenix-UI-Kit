import React from 'react';
import ReactDOM from 'react-dom';
import * as eva from 'eva-icons';

import './index.css';
import App from './App';

eva.replace();

ReactDOM.render(<App />, document.getElementById('root'));
