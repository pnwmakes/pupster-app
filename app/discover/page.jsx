'use client';
import { useEffect, useState } from 'react';

export default function Discover() {
    const [dogImage, setDogImage] = useState('');
    const [friends, setFriends] = useState(0);

    // Fetch a random dog image
    const fetchDog = async () => {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            setDogImage(data.message);
        } catch (err) {
            console.error('Failed to fetch dog image:', err);
        }
    };

    useEffect(() => {
        fetchDog();
    }, []);

    // Handle thumbs up (1 in 5 chance to gain a friend)
    const handleLike = () => {
        if (Math.random() < 0.2) {
            setFriends((prev) => prev + 1);
        }
        fetchDog();
    };

    const handleDislike = () => {
        fetchDog();
    };

    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-6'>
            <h1 className='text-4xl font-bold text-gray-800 dark:text-white mb-4'>
                Make a New Friend
            </h1>
            <p className='text-lg mb-6 text-gray-700 dark:text-gray-300'>
                Click thumbs up or down to meet another dog!
            </p>

            {dogImage && (
                <div className='max-w-md mx-auto mb-6'>
                    <img
                        src={dogImage}
                        alt='Random Dog'
                        className='rounded-xl shadow-lg mx-auto w-full h-auto max-h-[400px] object-cover'
                    />
                </div>
            )}

            <div className='flex justify-center gap-6 mb-6'>
                <button
                    onClick={handleLike}
                    className='px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'
                >
                    👍 Thumbs Up
                </button>
                <button
                    onClick={handleDislike}
                    className='px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition'
                >
                    👎 Thumbs Down
                </button>
            </div>

            <div className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
                🐶 Friends Who Liked You Back:{' '}
                <span className='text-blue-500'>{friends}</span>
            </div>
        </div>
    );
}
