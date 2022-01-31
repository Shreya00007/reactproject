import React from 'react';

export default class Home extends React.Component{
    constructor()
    {
        super()
    }
    componentDidMount()
    {
        console.warn("called life cycle")
    }
    render()
    {
        return(
            <div>
            <h1>Home Component</h1>
            <h3>Subscribe</h3>
            </div>
        )
    }
}