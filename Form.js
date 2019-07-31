import React, {Component} from 'react';

class Form extends Component{
       render(){

         return(
<div>
		<form>

			
			<label> Full Name </label>
			<input type="text" />

			<label> Email </label>
			<input type="email" />

			<label> Contact  </label>
			<input type="number" />

			<label> Message </label>
			<input type="text" />




		</form>


   
   </div>


         	)


       }
}

export default Form;