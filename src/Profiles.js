import React from 'react';

export default class Profiles extends React.Component
{
    render()
    {
        return(
            <div>
            <h1>Hello Props</h1>
            <h1>{this.props.data}</h1>
            <h1>{this.props.text.name}</h1>
            </div>
        )
    }
}