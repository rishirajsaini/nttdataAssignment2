import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ErrorBoundries from './components/ErrorBoundries';
import RoomsContainer from './components/roomsContainer';



const style = {
	color:'grey'
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			room1status:true,
			room2status:false,
			room3status:false,
			room4status:false,
			room1Data: {adult:0, children:0},
			room2Data: {adult:0, children:0},
			room3Data: {adult:0, children:0},
			room4Data: {adult:0, children:0}
		}
	}
	handleCheckBoxClick = (stateName) => {
		if(stateName ==='room2status') {
			this.setState({room2status: !this.state.room2status})
			this.setState({ room2Data: { ...this.state.room2Data, adult: 1, children:0} })
		} else if(stateName ==='room3status') {
            if(this.state.room3status === true && this.state.room2status === true) {
                this.setState({room3status: false, room2status: false})
                } else {
                this.setState({room3status: true,room2status: true})
                }
            
			this.setState({ room3Data: { ...this.state.room3Data, adult: 1, children:0} })
			this.setState({ room2Data: { ...this.state.room2Data, adult: 1, children:0} })
		} else if(stateName ==='room4status') {
                if(this.state.room2status === true && this.state.room3status === true && this.state.room4status === true) {
                    this.setState({room4status: false, room3status: false, room2status: false})
                } else {
                this.setState({room4status: true,room3status: true, room2status: true })
                }
            this.setState({ room4Data: { ...this.state.room4Data, adult: 1, children:0} })
			this.setState({ room3Data: { ...this.state.room3Data, adult: 1, children:0} })
			this.setState({ room2Data: { ...this.state.room2Data, adult: 1, children:0} })
		} 
	}
	
	handleSelectedBoxChange = (room,data, type) => {
		if(room ==='room1Data' && type === 'adult') {
			this.setState({ room1Data: { ...this.state.room1Data, adult: data} })
		} else if(room ==='room1Data' && type === 'children') {
			this.setState({ room1Data: { ...this.state.room1Data, children: data} })
		} else if(room ==='room2Data' && type === 'adult') {
			this.setState({ room2Data: { ...this.state.room2Data, adult: data} })
		} else if(room ==='room2Data' && type === 'children') {
			this.setState({ room2Data: { ...this.state.room2Data, children: data} })
		} else if(room ==='room3Data' && type === 'adult') {
			this.setState({ room3Data: { ...this.state.room3Data, adult: data} })
		} else if(room ==='room3Data' && type === 'children') {
			this.setState({ room3Data: { ...this.state.room3Data, children: data} })
		} else if(room ==='room4Data' && type === 'adult') {
			this.setState({ room4Data: { ...this.state.room4Data, adult: data} })
		} else if(room ==='room4Data' && type === 'children') {
			this.setState({ room4Data: { ...this.state.room4Data, children: data} })
		}
	}
	
	
	handleSubmit = () => {
		alert('form submitted successfull please check all form data in console.')
		console.log(JSON.stringify(this.state))
	}
	
	render() {
		
		console.log(JSON.stringify(this.state))
		return (
 
			<ErrorBoundries>
			
				<div className="row">
				<div className = "col-xs-3">
					<RoomsContainer roomsLable = "Room 1" checkBox = "false" colorstyle = "white" handleChange = {this.handleSelectedBoxChange.bind(this,'room1Data')}  dropDownStatus = "true" />
				</div>
				<div className = "col-xs-3">
					<RoomsContainer roomsLable = "Room 2" checkBox = "true" colorstyle = {this.state.room2status  ? 'white': 'grey'} handleChange = {this.handleSelectedBoxChange.bind(this,'room2Data')} handleClick = {this.handleCheckBoxClick.bind(this,'room2status' )} dropDownStatus = {this.state.room2status}/>
				</div>
				<div className = "col-xs-3">
					<RoomsContainer roomsLable = "Room 3" checkBox = "true" colorstyle = {this.state.room3status  ? 'white': 'grey'} handleChange = {this.handleSelectedBoxChange.bind(this,'room3Data')}  handleClick = {this.handleCheckBoxClick.bind(this, 'room3status')}  dropDownStatus = {this.state.room3status} />
				</div>
				<div className = "col-xs-3">
					<RoomsContainer roomsLable = "Room 4" checkBox = "true" colorstyle = {this.state.room4status  ? 'white': 'grey'}  handleChange = {this.handleSelectedBoxChange.bind(this,'room4Data')}  handleClick = {this.handleCheckBoxClick.bind(this, 'room4status')} dropDownStatus = {this.state.room4status} />
				</div>
				
				</div>
                <div>
                
				<button style = {{marginLeft:'20px',marginTop:'20px'}} onClick={this.handleSubmit}>Submit </button>				
				</div>	
			</ErrorBoundries>
	
		);
	}
}

export default App;
