import React, { Component } from 'react'
// import { render } from "react-dom"
import _ from "lodash/fp";
import Fuse from "fuse.js";
import axios from "axios";

import searchSVG from '../../assets/search.svg'
import locationSVG from '../../assets/location.svg'

// const data = [
//     {
//       name: "Fruit",
//       vals: "magic",
//       typechild: [
//         {
//           color: "#fff",
//           level: 2,
//           name: "Orange",
//           vals: "diet"
//         },
//         {
//           color: "#fff",
//           level: 3,
//           name: "Apple",
//           vals: "health"
//         }
//       ]
//     },
//     {
//       name: "Vegetable",
//       typechild: [
//         {
//           color: "#fff",
//           level: 2,
//           name: "Potato",
//           vals: "recipe"
//         }
//       ]
//     },
//     {
//       name: "Technology",
//       typechild: [
//         {
//           color: "#fff",
//           level: 2,
//           name: "App",
//           vals: ["ipod", "iphone", "apple"]
//         }
//       ]
//     },
//     {
//       name: "Color",
//       typechild: [
//         {
//           color: "#fff",
//           level: 2,
//           name: "Green",
//           vals: ["paiting", "nature", "rain"]
//         }
//       ]
//     }
// ];

class Search extends Component {
    state = {
        searchVal: "",
        data: ''
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/search')
            .then(res => {
                // console.log(res.data);
                this.setState({ data: res.data });
            })
    }

    fuse(e, y) {
        const nested = y === 2 ?
         [{ name: "typechild.name", weight: 0.4 }, { name: "typechild.vals", weight: 0.3 }] :
         [{ name: "name", weight: 0.4 }, { name: "vals", weight: 0.2 }];
        const threshhold = y === 2 ? 0.3 : 0.3;
        // 2 means it is nested
        var opts = {
          shouldSort: true,
          threshold: threshhold,
          keys: nested
        };
        var fuse = new Fuse(e, opts);
        var res = fuse.search(this.state.searchVal);
        return res;
    }

    render() {
        const { searchVal, data } = this.state;
        // const searchOn = searchVal.length > 0;

        // let output1 = this.fuse(data.loc);
        const output1 = data.loc;
        console.log(output1);

        {output1 
            ? 
                <>
                    {output1.map(x => {
                        return(
                            <h1>{x}</h1>
                        );
                    })}
                </>
            
            :
                <>
                    <h1>Loading...</h1>
                </>
        }

        // if (searchOn && this.fuse(data.loc).length > 0) {
        //     output1 = this.fuse(data.loc);
        // }

        return (
            <>
                {/* <input onChange={e => this.setState({ searchVal: e.target.value })} /> */}  
                <div className="search">
                    <h1>Travel Hassel Free</h1>
                    <p>with <strong>PRO</strong> Guides</p>
                    <img className="searchSVG" alt="." src={searchSVG}></img>
                    <input 
                        onChange={e => {
                            this.setState({ searchVal: e.target.value })
                            }
                        } 
                        className="input-field" type="text" placeholder="Where to? eg: Banglore" name="location">
                    </input>
                    <img className="locationSVG" src={locationSVG} alt="." ></img>
                            
                    <div className="searchResults">
                        
                    
                    </div>
                    :
                        <>
                            <h1>No result</h1>
                        </>
                </div>
            </>
        )
}}

export default Search;


// {output1.map(x => {
//     console.log(x);
//     // <span key={x.name}>{x.name} </span>
//     return (
//         <div className="result">
//         <div className="CityResult">
//             {/* <h2>{{}}</h2> */}
//             {/* <p>{India, Asia}</p> */}
//         </div>
//         <div className="BasicResult">
//             <ul>
//                 {/* <li><span>{{50}}</span>{{Guides}}</li> */}
//                 {/* <li><span>{{7}}</span>{{Packages}}</li> */}
//             </ul>
//         </div>
//         </div>
//     );
// })
// }
