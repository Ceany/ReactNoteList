import React from 'react';
import NoteItems from './note-items';

class NoteList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        let itemArray = this.state.items;

        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });

        this.setState({
            items: itemArray
        });

        this._inputElement.value = "";

        e.preventDefault();
    }

    render() {
        return (
            <div className="noteListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="enter note"/>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <NoteItems entries={this.state.items}/>
            </div>
        )
    }
}

export default NoteList;