import React, { Component } from 'react'
import searchSVG from '../../assets/search.svg'
import locationSVG from '../../assets/location.svg'

export default class Search extends Component {
    render() {
        return (
            <div>
                    <div className="search">
                    <h1>Welcome!</h1>
                    <img className="searchSVG" alt="." src={searchSVG}></img>
                    <input class="input-field" type="text" placeholder="Where to? eg: Banglore" name="location"></input>
                    <img className="locationSVG" src={locationSVG} alt="." ></img>
                    </div>
            </div>
        )
    }
}
