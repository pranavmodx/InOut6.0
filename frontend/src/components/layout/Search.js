import React, { Component } from 'react'
import searchSVG from '../../assets/search.svg'
import locationSVG from '../../assets/location.svg'

export default class Search extends Component {
    render() {
        return (
            <div>
                    <div className="search">
                    <h1>Travel Hassel Free</h1>
                    <p>with <strong>PRO</strong> Guides</p>
                    <img className="searchSVG" alt="." src={searchSVG}></img>
                    <input class="input-field" type="text" placeholder="Where to? eg: Banglore" name="location"></input>
                    <img className="locationSVG" src={locationSVG} alt="." ></img>
                    <div className="searchResults">
                        <div className="result">
                            <div className="CityResult">
                                <h2>New Delhi</h2>
                                <p>India, Asia</p>
                            </div>
                            <div className="BasicResult">
                                <ul>
                                    <li><span>50</span>Guides</li>
                                    <li><span>7</span>Packages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
