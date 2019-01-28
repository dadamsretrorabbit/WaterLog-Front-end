import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './index.css';
import demo from './routes/demo';
import home from './routes/home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            <aside>
                <ul>
                <li><Link to={'/demo'}>Demo</Link></li>
                <li><Link to={'/'}>Home</Link></li>
                </ul>

            </aside>

            <main>
                <Route exact path="/" component={home}/>
                <Route path="/demo" component={demo}/>
            
            </main>
        </div>

     </Router>, 
document.getElementById('root'
));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
