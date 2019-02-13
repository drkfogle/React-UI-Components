import React from 'react';
import CardBanner from './CardBanner';

function CardContent() {
    return(
        <div className="cardcontent">
            <CardBanner />
            <h1>Get Started with React</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <h5>reactjs.org</h5>
        </div>
    )
}


export default CardContent;