import React from 'react';

class Note extends React.Component {
    render() {
        return (
            <li key={this.key}>{this.props.text}</li>
        )
    }
}

export default Note;