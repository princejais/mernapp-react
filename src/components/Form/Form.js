import React, { Component } from 'react';
import Label from './Label/Label';
import Input from './Input/Input';
import Button from './Button/Button';

class Form extends Component{

    state = {
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        userState: '',
        country: '',
        zipCode: '',
        agreed: false
    }

    formSubmission (e){
        console.log(this.state);
        e.preventDefault();

        const userDetails = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileNumber: this.state.mobileNumber,
            email: this.state.email,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            city: this.state.city,
            userState: this.state.userState,
            country: this.state.country,
            zipCode:this.state.zipCode,
            agreed: this.state.agreed
        };

        fetch("http://localhost:8081/user/createUser", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }

    textHandler (e){
        this.setState({ [e.target.name]: e.target.value });
    }

    emailHandler (e){
        this.setState({ email : e.target.value });
    }

    telHandler (e){
        this.setState({ mobileNumber: e.target.value });
    }

    numberHandler (e){
        this.setState({ zipCode: e.target.value });
    }

    checkHandler (e){
        this.setState({ agreed: true });
    }


    render() {
        return (
            <div className="offset-1 col-10">
                <br /><br />
                <form onSubmit={(e) => this.formSubmission(e)}>
                    <div className="form-row">
                        <div className="form-group col-md-6 mb-6">
                            <Label for="firstName" labelText= "First Name" />
                            <Input 
                                type="text" 
                                placeholder="First Name" 
                                value={this.state.firstName} 
                                name="firstName" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="lastName" labelText= "Last Name" />
                            <Input 
                                type="text" 
                                placeholder="Last Name" 
                                value={this.state.lastName} 
                                name="lastName" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 mb-6">
                            <Label for="mobileNumber" labelText= "Mobile Number" />
                            <Input 
                                type="tel" 
                                placeholder="Mobile Number" 
                                value={this.state.mobileNumber} 
                                name="mobileNumber" 
                                required 
                                onChange={(e) => this.telHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="email" labelText= "Email" />
                            <Input 
                                type="email" 
                                placeholder="E-Mail Address" 
                                value={this.state.email} 
                                name="email" 
                                required 
                                onChange={(e) => this.emailHandler(e)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6 mb-6">
                            <Label for="addressLine1" labelText= "Address Line 1" />
                            <Input 
                                type="text" 
                                placeholder="Address Line 1" 
                                value={this.state.addressLine1} 
                                name="addressLine1" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="addressLine2" labelText= "Address Line 2 (Optional)" />
                            <Input 
                                type="text" 
                                placeholder="(Optional)" 
                                value={this.state.addressLine2} 
                                name="addressLine2" 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="city" labelText= "City" />
                            <Input 
                                type="text" 
                                placeholder="City" 
                                value={this.state.city} 
                                name="city" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="userState" labelText= "State" />
                            <Input 
                                type="text" 
                                placeholder="State" 
                                value={this.state.userState} 
                                name="userState" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="country" labelText= "Country" />
                            <Input 
                                type="text" 
                                placeholder="Country" 
                                value={this.state.country} 
                                name="country" 
                                required 
                                onChange={(e) => this.textHandler(e)} />
                        </div>

                        <div className="form-group col-md-6 mb-6">
                            <Label for="zipCode" labelText= "Zip Code" />
                            <Input 
                                type="number" 
                                placeholder="Zip Code" 
                                value={this.state.zipCode} 
                                name="zipCode" 
                                required 
                                onChange={(e) => this.numberHandler(e)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" 
                                type="checkbox" 
                                value={this.state.agreed} 
                                name="agreed" 
                                required 
                                onChange={ (e) => this.checkHandler(e) } />
                            <Label className="form-check-label" for="agreed" labelText="Agree to terms and conditions" />
                        </div>
                    </div>
                    <Button />
                </form>
                <br /><br />
            </div>
        );
    }
}

export default Form