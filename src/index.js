import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './translation/i18n';
import App from './App';

ReactDOM.render(
    <Suspense fallback={''}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
)
