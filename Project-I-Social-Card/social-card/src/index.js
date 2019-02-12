import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Header.css';
import './CardContent.css'
import HeaderContainer from './HeaderContainer';
import CardContainer from './CardContainer';
import Footer from './Footer';

function LambdaSchool() {
    return(
        <div>
            <HeaderContainer />
            <CardContainer />
            <Footer />
        </div>
    )
}

ReactDOM.render(<LambdaSchool />, document.getElementById('root'));
