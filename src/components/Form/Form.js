import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    state = {
        customer:{
            name:'',
            address: '',
            city:'',
            zip:'',
            type: ''
        }
    }

    handleChange = (event, inputInfo) =>{
        this.setState({
            customer:{
                ...this.state.customer,
                [inputInfo]:event.target.value
            }
        })
    }

    addCustomerInfo = () =>{
        console.log('clicked', this.state);
        axios.post('/api/order', this.state.customer).then(response=>{
            console.log('In addCustomerInfo', response.data)
        }).catch(err=>{       
            console.log('error in POST route')
         })
    }


    render(){
        return(
            <div>
                <h2>Step 2: Customer Information</h2>  

                <div> 
                    <label htmlFor="Name">Name</label>
                    <input onchange={(event)=>this.handleChange(event, 'name')} placeholder="Name"/>
                    <label htmlFor="Address">Address</label>
                    <input onchange={(event)=>this.handleChange(event, 'address')} placeholder="Street Address"/>
                    <label  htmlFor="City">City</label>
                    <input onchange={(event)=>this.handleChange(event, 'city')} placeholder="City"/>
                    <label htmlFor="Zip">Zip</label>
                    <input onchange={(event)=>this.handleChange(event, 'zip')} placeholder="Zip"/>
                </div>
                <div>
                    <input type="radio" /><label>Delivery</label>
                    <input type="radio"/><label>Pickip</label>
                </div>
                <button onClick={this.addCustomerInfo}>Next</button>
            </div>
        )
    }
}

export default Form;