import React, { Component } from 'react'
import Star from '../../assets/star.svg'
import Tick from '../../assets/tick.svg'
import Cost from '../../assets/cost.svg'
/*import Dp from '../../assets/dp.jpg'*/


export default class explore extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Popular Guides in New Delhi</h1>
                    <div>
                        <div>
                        <img className="dp" src="#"></img>
                        <h1>First Last</h1>
                        <img className="cost" src={Cost}></img>
                        </div>
                        <p>Languages:<spna>English</spna><spna>Hindi</spna><spna>Malayalam</spna></p>
                        <div>
                            <img className="star" src={Star}></img>
                            <img className="star" src={Star}></img>
                            <img className="star" src={Star}></img>
                            <img className="star" src={Star}></img>
                            <img className="star" src={Star}></img>
                        </div>
                        <div>
                            <img className="tick" src={Tick}></img>
                            <p>Available!</p>
                        </div>
                    </div>

                </div>
                <div>
                </div>
                
            </div>
        )
    }
}
