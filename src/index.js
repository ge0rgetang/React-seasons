import React from 'react'
import ReactDOM from 'react-dom'

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
    
//     return <div>Latitude: </div>
// } 

// class vs functional
// class allows structure, state (user inputs), and lifecycle
// function is for simple stuff
class App extends React.Component {
    // first thing called when object is init, we can init state here
    constructor(props) {
        super(props)
        this.state = { 
            latitude: null,
            longitude: null,
            errorMessage: '' 
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // DO NOT directly set/change state props, this.state.lat = ..., only first time
                const newState = { 
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude 
                }
                this.setState(newState)
            },
            (err) => {
                const errState = {
                    errorMessage: err.message
                }
                this.setState(errState)
            }
        )
    }

    // React says we have to define render
    render() {
        if (!this.state.errorMessage) {
            return (
                <div>
                    Latitude: {this.state.latitude || 'Fetching Lat...'}
                    <br />
                    Longitude: {this.state.longitude || 'Fetching Long...'}
                </div>
            )
        } else {
            return <div>Error: {this.state.errorMessage}</div>
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))