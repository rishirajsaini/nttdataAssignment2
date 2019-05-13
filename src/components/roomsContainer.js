import React,{Component} from 'react';


class RoomsContainer extends Component {

	roomActivator = ()=>{
		
		this.props.handleClick();
	}
	
	render(){
	return (
			<div>
			  <div style = {{borderColor:'black', borderStyle:'solid', marginLeft:'30px'}}>
					<table style={{backgroundColor:this.props.colorstyle}}>
					<tbody >
					<tr>
						<td colSpan = "2" >
							{
								this.props.checkBox === 'true' ? <input type = "checkbox" checked = {!this.props.dropDownStatus ? '' : 'checked' }  onChange = {this.roomActivator} /> :''
							} {this.props.roomsLable}
						</td>
					</tr>
					<tr>
						<td>
							Adults<br /> (18+)<br/>
							<select onChange = {(e)=> this.props.handleChange(e.target.value, 'adult')}  disabled = {!this.props.dropDownStatus ? 'disabled' : '' }  >
								<option selected = {!this.props.dropDownStatus ? 'selected':''}  value = "1">
								1
								</option>
								<option value = "2">
								2
								</option>
							</select>
						</td>
						<td>
							<span>Children <br /> (0-17) </span><br/>
							<select onChange = {(e)=> this.props.handleChange(e.target.value, 'children')} disabled = {!this.props.dropDownStatus ? 'disabled' : '' }>
								<option selected = {!this.props.dropDownStatus ? 'selected':''} value = "0">
								0
								</option>
								<option value = "1">
								1
								</option>
								<option value = "2">
								2
								</option>
							</select>
						</td>
					</tr>
					</tbody>
					
					</table>
					
			  </div>
			  
			</div>
			)};
}
			
export default RoomsContainer;