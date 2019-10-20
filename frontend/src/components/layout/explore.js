import React, { Component } from 'react'
import Star from '../../assets/star.svg'
import Tick from '../../assets/tick.svg'
import Cost from '../../assets/cost.svg'
import IndiaGate from '../../assets/indiagate.png'
import Dp from '../../assets/dp.png'

class Explore extends Component {
    render() {
        return (
            <div class="ExploreContainer">
                <div className="ExploreContainerContainer">
                <div className="left"> 
                    <h1>Popular Guides in New Delhi</h1>
                    <div className="card">
                        <img className="dp" src={Dp}></img>
                        <div>
                        <div className="Gname">
                            <h1>First Last</h1>
                            <img className="cost" src={Cost}></img>
                        </div>
                        <p>Languages:<span>English</span><span>Hindi</span><span>Malayalam</span></p>
                        <div className="star">
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                        </div>
                            <p className="Avail">Available!</p>

                        </div>
                    </div>
                    <div className="card">
                        <img className="dp" src={Dp}></img>
                        <div>
                        <div className="Gname">
                            <h1>First Last</h1>
                            <img className="cost" src={Cost}></img>
                        </div>
                        <p>Languages:<span>English</span><span>Hindi</span><span>Malayalam</span></p>
                        <div className="star">
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                            <img src={Star}></img>
                        </div>
                            <p className="Avail">Available!</p>

                        </div>
                    </div>
                </div>
                <div className="vertiLine"></div>
                <div>
                <h1>Popular Packages in New Delhi</h1>
                    <div className="packsContainer" >
                        <div className="pack">
                            <img src={IndiaGate}></img>
                            <p>Full Day Delhi Package</p>
                        </div>
                        <div className="pack">
                            <img src={IndiaGate}></img>
                            <p>Full Day Delhi Package</p>
                        </div>
                        <div className="pack">
                            <img src={IndiaGate}></img>
                            <p>Full Day Delhi Package</p>
                        </div>
                        <div className="pack">
                            <p>Explore More</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
};

export default Explore;