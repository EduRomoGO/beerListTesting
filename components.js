import React, { Component } from 'react';

export class BeerListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};
		this.addItem = this.addItem.bind(this);
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

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	propTypes = {
		onSubmit: React.PropTypes.func.isRequired
	};

	render() {
		return <div>
					<input />
					<button />
				</div>
	}
}


export class BeerList extends Component {
	render() {
		return <ul />
	}
}