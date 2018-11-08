import React, {
	Component
} from 'react';
import api from './utils/api';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'OPEN_MODAL':
			return {
				...state,
				modalIsOpen: true
			};
		case 'CLOSE_MODAL':
			return {
				...state,
				modalIsOpen: false
			}
		case 'OPEN_MEMBERS_MODAL':
			return {
				MembersModalIsOpen: true
			}
		case 'CLOSE_MEMBERS_MODAL':
			return {
				MembersModalIsOpen: false
			}
	};
}

export class Provider extends Component {
	state = {
		modalIsOpen: false,
		loader: true,
		content: {},
		dispatch: action => this.setState(state => reducer(state, action))
	}

	async componentDidMount() {
		const res = await api.getContent();
		this.setState({
			content: res.data,
			loader: false
		});
	}
	// componentDidMount(){
	//  api.getContent()
	//    .then(res => this.setState({
	//        content: res.data,
	//        loader: false
	//      }))
	//      .catch(error => {
	//       console.log(error)
	//     })
	// }

	render() {
		return (
			<Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;
