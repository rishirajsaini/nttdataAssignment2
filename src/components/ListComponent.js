import React, {Component} from 'react';
import './../App.css';

//function ListComponent(props) {
class ListComponent extends Component {
		constructor(props){
			super(props);
		}
		
		getUsers(data){
			//console.log(data)
				const result = data.map(function(searchData){
						return (
						  
							<tr>
								<td>
								{searchData['_id']}
								</td>
								<td>
								{searchData['name']}
								</td>
								<td>
								{searchData['gender']}
								</td>
							</tr>
							
				  
						
					);
				}
			)
			
			return result;
		}
	render() {
		  return (
			<div className="App">
			<table>
			<tbody>
			<tr>
				<th>Id</th> <th>Name</th> <th>Gender</th>
			</tr>
		
			
			{
				this.getUsers(this.props.data)
			}
			
			</tbody>
			</table>
			  
			</div>
		  );
	}
}

export default ListComponent;