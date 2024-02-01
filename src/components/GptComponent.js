import React, { useState } from 'react';
import axios from 'axios';

const GptComponent = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/gpt4', prompt);
            setResponse(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>GPT-4 Chat</h2>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
            {response && <p>{response}</p>}
        </div>
    );
};

export default GptComponent;
