import React, { Component } from 'react'

export default class FetchData extends Component {
    constructor() {
        super();

    }

    render() {
        let api = 'https://jsonplaceholder.typicode.com/users'
        data = fetch(api);
        parsed = JSON.stringify(data);

        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}
