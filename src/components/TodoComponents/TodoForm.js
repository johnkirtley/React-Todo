import React from 'react'
import Styled from 'styled-components';

const Input = Styled.input`
display: flex;
flex-flow: column;
border: 2px solid black;
`


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
        this.setState({
            newItem: ''
        })
    }


    render() {
        return (
            <>
                <form onSubmit={this.submitForm}>
                    <Input type="text" value={this.state.newItem} onChange={this.handleChanges} />
                    <button>New Item</button>
                </form>
            </>
        )
    }
}

export default TodoForm;