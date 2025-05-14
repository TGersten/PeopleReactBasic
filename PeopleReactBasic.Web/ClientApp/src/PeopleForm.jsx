import React from 'react'

class PeopleForm extends React.Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 60 }} >
                <div className="row bg-light p-4 rounded mb-3">
                    <div className="col-md-3">

                        <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            className="form-control"
                            value={this.props.firstName}
                            onChange={this.props.onFirstNameChange}                        />
                    </div>

                    <div className="col-md-3">
                        <input type="text"
                            placeholder="Last Name"
                            name="lastName"
                            className="form-control"
                            value={this.props.lastName}
                            onChange={this.props.onLastNameChange }                        />
                    </div>

                    <div className="col-md-3">
                        <input type="text"
                            placeholder="Age"
                            name="age"
                            className="form-control"
                            value={this.props.age}
                            onChange={this.props.onAgeChange }                        />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning ml-3" onClick={this.props.onClearClick}>Clear All</button>
                    </div>
            
                </div>
            </div>


        );
    }


}


export default PeopleForm;