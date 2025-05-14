import React from 'react'

class PersonRow extends React.Component {

    getContent = () => {
        
        return 
    }


    getClassName = (n) => {
      return n>65 ? "table-danger" : ""

    }

    render() {
       
        if (!this.props.people.length) {
            return;

        }

        return this.props.people.map(p =>
            <tr className={this.getClassName(p.age)}>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
                <td>{p.age}</td>
            </tr>)   

    }





}





export default PersonRow;