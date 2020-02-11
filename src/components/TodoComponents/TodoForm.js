import React from 'react'


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: ''
        };
    }

    handleChanges = (e) => {
        this.setState({
            newItem: e.target.value
        });
    };

    submitForm = (e) => {
        e.preventDefault();
        this.props.addNewTask(this.state.newItem);
    }


    render() {
        return (
            <>
                <form onSubmit={this.submitForm}>
                    <input type="text" value={this.state.newItem} onChange={this.handleChanges} />
                    <button>New Item</button>
                </form>
            </>
        )
    }
}

export default TodoForm;