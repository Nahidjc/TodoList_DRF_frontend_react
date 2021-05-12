import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
            console.log(value);
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle} >
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Title</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="title"
                                placeholder="Enter Todo Title"
                                onChange={this.handleChange}
                                value={this.state.activeItem.title}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Description</Label>
                            <Input
                                type="text"
                                id="todo-description"
                                name="description"
                                placeholder="Enter Todo description"
                                onChange={this.handleChange}
                                value={this.state.activeItem.description}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check >
                                <Input
                                    type='checkbox'
                                    name='completed'
                                    onChange={this.handleChange}
                                    checked={this.state.activeItem.completed}
                                />
                            Completed
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color='success'
                        onClick={() => onSave(this.state.activeItem)} >
                        Save
                        </Button>
                </ModalFooter>

            </Modal>
        )
    }
}

export default CustomModal;