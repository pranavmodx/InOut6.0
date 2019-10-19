import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <img src="frontend/src/assets/search.svg"></img>
                <input class="input-field" type="text" placeholder="Where to? eg: Banglore" name="location"></input>
                <img src="../../assets/location.svg"></img>
                
            </div>
        )
    }
}
