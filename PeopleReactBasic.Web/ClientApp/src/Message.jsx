import React from 'react'

class Message extends React.Component {


    render() {

        if (!this.props.people.length) {
            return <h1>No people added yet! Add some people!</h1>

        }
        return;
    }

}

export default Message;