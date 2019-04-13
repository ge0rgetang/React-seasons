import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

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
    // constructor(props) {
    //     super(props)
    //     this.state = { 
    //         latitude: null,
    //         longitude: null,
    //         errorMessage: '' 
    //     }
    // }
    // alternatively:
    state = { 
        latitude: null,
        longitude: null,
        errorMessage: '' 
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
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

    componentDidUpdate() {
        console.log('comp did update')
    }

    // Helper method for render 
    renderContent() {
        if (!this.state.errorMessage && this.state.latitude) {
            return (
                <SeasonDisplay 
                    latitude={this.state.latitude} 
                    longitude={this.state.longitude} 
                />
            )
        } 
        
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <Spinner text="Fetching Location..." />
    }

    // React says we have to define render
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))