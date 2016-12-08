import React, { Component } from 'react';

export class BeerListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};
	};

	addItem(item) {
		this.setState({
			beers: [].concat(this.state.beers).concat([item])
		});
	};


  render() {
    return <div>
		        <InputArea onSubmit={this.addItem} />
		        <BeerList/>
    		</div>
  }
}

export class InputArea extends Component {

	propTypes = {
		onSubmit: React.PropTypes.func.isRequired
	};

	render() {
		return <input />
	}
}


export class BeerList extends Component {
	render() {
		return <ul />
	}
}