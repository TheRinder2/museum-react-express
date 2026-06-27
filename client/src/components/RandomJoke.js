import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RandomJoke.css'

const JokeComponent = () => {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            setJoke(`${response.data.setup} - ${response.data.punchline}`);
        } catch (err) {
            setError('Не удалось загрузить шутку');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className='container'>
            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && (
                <div>
                    <p>{joke}</p>
                    <button className='btn' onClick={fetchJoke}>Получить другую шутку</button>
                </div>
            )}
        </div>
    );
};

export default JokeComponent;