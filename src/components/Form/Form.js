import React, {Component} from 'react';

class Form extends Component{
    state = {
        Customer =({
            name:'',
            address: '',
            city:'',
            zip:
        })
    }
    render(){
        return(
            <div>
                <h2>Step 2: Customer Information</h2>  
                <div> 
                    <label htmlFor="Name">Name</label>
                    <input onchange={()=>this.handleChange()} placeholder="Name"/>
                    <label htmlFor="Address">Address</label>
                    <input placeholder="Street Address"/>
                    <label htmlFor="City">City</label>
                    <input placeholder="City"/>
                    <label htmlFor="Zip">Zip</label>
                    <input placeholder="Zip"/>
                </div>
            </div>
        )
    }
}

export default Form;