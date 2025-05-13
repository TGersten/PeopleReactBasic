import React from 'react'

class PeopleForm extends React.Component {
    render() {
        return (
            <div className="container" style="margin-top: 60px;">
                <div className="row bg-light p-4 rounded mb-3">
                    <div className="col-md-3">
                        <input type="text" placeholder="First Name" name="firstName" className="form-control" value="" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" value="" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Age" name="age" className="form-control" value="" />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary">Add</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning ml-3">Clear All</button>
                    </div>
                </div>
                <h1>No people added yet! Add some people!</h1>
            </div>


        );
    }


}


export default PeopleForm;