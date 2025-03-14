import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Hacer una solicitud al backend
        fetch('http://localhost:8000/api/hello/')
            .then((response) => response.json())
            .then((data) => setMessage(data.message))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Frontend with Vite + React + TypeScript</h1>
            <p>Response from Django: {message}</p>
        </div>
    );
}

export default App;