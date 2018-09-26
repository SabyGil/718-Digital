import React from 'react';

export default class Clock extends React.Component {
	state = {
		date: new Date()
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		const {
			date
		} = this.state;
		return (
			<div>
        <p>Time: {date.toLocaleTimeString()}</p>
      </div>
		);
	}
}
