import React from 'react';
import PeopleForm from "./PeopleForm";
import PersonRow from "./PersonRow"
import Message from "./Message"
class PeopleTable extends React.Component {

    state = {

        firstName: '',
        lastName: '',
        age: ''
        ,

        people: []
    };

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }
    onLastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }
    onAgeChange = e => {
        this.setState({ age: e.target.value })
    }



    onAddClick = () => {
        const copy = [...this.state.people];
        const newPerson = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: parseInt(this.state.age)

        };

        copy.push(newPerson);

        this.setState({
            people: copy,
            firstName: '', lastName: '', age: ''
        });
    };

    onClearClick = () => {
        this.setState(
            {
                people: []
            }
        )
    };

  



    render() {
        return (
            <div className='container mt-5'>

                <PeopleForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}

                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}

                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick}
                />

                <Message people={this.state.people }/>
               
                    <table className='table table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                        <PersonRow people={this.state.people} />
                        </tbody>
                    </table>
                
            </div>
        );

    }
}




export default PeopleTable;