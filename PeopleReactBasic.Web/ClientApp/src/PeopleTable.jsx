import React from 'react'
import PeopleForm from "./PeopleForm"
{
    class PeopleTable extends React.Componenet {

        state = {
            currentPerson: {
                firstName: '',
                lastName: '',
                age: ''
            },

            people: []
        };


        render() {
            return (
                <div className='container mt-5'>
                    <PeopleForm />
                </div>
            )
        }
    }
}



export default PeopleTable;