import React, {Component} from 'react';

class Counter extends Component {
	state ={
		count: 0,
		tags: ['tag1', 'tag2', 'tag3']
	};

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;

		return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
	}

	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	handleIncrement = (product) => {
		// console.log('Increment Clicked', this);
		// this.state.count++;
		console.log(product);
		this.setState({count: this.state.count +1})
	}

	// doHandleIncrement = () => {
	// 	this.handleIncrement({id: 1});
	// }

	render() {

		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button 
					onClick={(product) => this.handleIncrement(product)}
					className="btn btn-secondary btn-sm">Increment
				</button>
				<div>
					{this.state.tags.length === 0 && 'Please create a new tag!'}
				   	{this.renderTags()}	
					}
				</div>
			</React.Fragment>
			);
	}

	getBadgeClasses(){
		let classes = 'badge m-2 badge-';
		classes += (this.state.count === 0) ?'warning' : 'primary';
		return classes;
	}

	formatCount(){
		const {count} = this.state;
		return count === 0 ? <h1>'Zero'</h1> : count;
	}
}

export default Counter;