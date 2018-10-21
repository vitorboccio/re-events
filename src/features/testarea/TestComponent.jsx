import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { incrementCounter, decrementCounter } from './testActions'

const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}

const Marker = () => <Icon name="marker" size="big" color="red" />

class TestComponent extends Component {
	static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
	};
	
	state = {
		address: '',
		scriptIsLoaded: false
	}

	handleScriptLoad = () => {
		this.setState({
			scriptIsLoaded: true
		})
	}

	handleFormSubmit = (event) => {
		event.preventDefault()

		geocodeByAddress(this.state.address)
				.then(results => getLatLng(results[0]))
				.then(latLng => console.log('Success', latLng))
				.catch(error => console.error('Error', error))
	}

	onChange = (address) => this.setState({address})

  render() {
		const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const {incrementCounter, decrementCounter, data} = this.props
    return (
        <div>
					{/* <Script
						url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBftBmszB5z7wns6db-g412NN-OhozUnsU&libraries=places&language=en-US"
						onLoad={this.handleScriptLoad}
					/> */}
					<h1>test area</h1>
					<h3>the answer is : {data}</h3>
					<Button onClick={incrementCounter} color="green" content="increment" />
					<Button onClick={decrementCounter} color="blue" content="decrement" />
					<br/>
					<br/>
					<br/>
					<form onSubmit={this.handleFormSubmit}>
					{this.state.scriptIsLoaded && <PlacesAutocomplete inputProps={inputProps} />}
						
						<button type="submit">Submit</button>
					</form>

					<div style={{ height: '300px', width: '100%' }}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: 'AIzaSyBftBmszB5z7wns6db-g412NN-OhozUnsU' }}
							defaultCenter={this.props.center}
							defaultZoom={this.props.zoom}
						>
							<Marker
								lat={59.955413}
								lng={30.337844}
								text={'Kreyser Avrora'}
							/>
						</GoogleMapReact>
					</div>
			</div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
