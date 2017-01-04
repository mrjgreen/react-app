import React, { Component } from 'react';

class CheckRow extends Component {
    render() {
        return (
            <li>{this.props.check.name} <a href={"check/" + this.props.check.id}>Edit</a></li>
        );
    }
}

class Checks extends Component {
    render() {

        const checks = [
            {
                id: 1,
                name: "First Check"
            },
            {
                id: 2,
                name: "Second Check"
            },
            {
                id: 3,
                name: "Third Check"
            }
        ];

        return (
            <div>
                <h1>Checks {checks.length}</h1>
                <ul>
                    {checks.map(function(check, id){
                        return <CheckRow check={check} key={id}/>;
                    })}
                </ul>
            </div>
        );
    }
}

export default Checks;
