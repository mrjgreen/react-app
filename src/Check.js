import React, { Component } from 'react';

class Check extends Component {
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

        var checkId = this.props.params.id;

        var check = checks.find(c => c.id === checkId);

        return (
            <div>
                <h1>{check.name}</h1>
                <div>{check.id}</div>
            </div>
        );
    }
}

export default Check;
