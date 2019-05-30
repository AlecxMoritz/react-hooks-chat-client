import React, { useState } from 'react';
import { Input, Button, Form } from 'reactstrap';

const MessageInput = () => {
    const [ channel, setChannel ] = useState({});
    const [ text, setText ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        console.log(text);
    }

    return (
        <React.Fragment>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input type="text" value={ text } onChange={(e) => setText(e.target.value)} /><Button>Send</Button>
            </Form>
        </React.Fragment>
    )
}

export default MessageInput;