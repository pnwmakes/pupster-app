'use client';
import { useEffect, useState } from 'react';

export default function Search() {
    const [breeds, setBreeds] = useState({});
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);

    // Fetch list of breeds
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then((res) => res.json())
            .then((data) => setBreeds(data.message));
    }, []);

    // Fetch images for selected breed
    const fetchBreedImages = async (breed) => {
        try {
            const res = await fetch(
                `https://dog.ceo/api/breed/${breed}/images`
            );
            const data = await res.json();
            setImages(data.message.slice(0, 12)); // show up to 12
        } catch (err) {
            console.error('Failed to load breed images:', err);
        }
    };

    const handleSelectChange = (e) => {
        const breed = e.target.value;
        setSelectedBreed(breed);
        fetchBreedImages(breed);
    };

    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 p-6'>
            <h1 className='text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white'>
                Search Page
            </h1>

            <div className='max-w-md mx-auto mb-8'>
                <select
                    value={selectedBreed}
                    onChange={handleSelectChange}
                    className='w-full p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white'
                >
                    <option value=''>-- Select a breed --</option>
                    {Object.keys(breeds).map((breed) => (
                        <option key={breed} value={breed}>
                            {breed.charAt(0).toUpperCase() + breed.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {images.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Dog ${index}`}
                            className='rounded-lg shadow-md object-cover w-full h-64'
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
