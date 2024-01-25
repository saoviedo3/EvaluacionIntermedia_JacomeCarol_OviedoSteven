import { useState } from 'react';
import PropTypes from 'prop-types';

const AdoptionForm = ({ dogs, adopters, onAdoptionSubmit }) => {
    const [selectedDog, setSelectedDog] = useState('');
    const [selectedAdopter, setSelectedAdopter] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedDog && selectedAdopter) {
            onAdoptionSubmit(selectedDog, selectedAdopter);
            // Clear selected values after submission
            setSelectedDog('');
            setSelectedAdopter('');
        } else {
            console.error('Debe seleccionar una Evaluacion y un Estudiante.');
        }
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '12px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ced4da',
    };

    const buttonStyle = {
        padding: '12px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        transition: 'background-color 0.2s ease',
        ':hover': {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <select style={inputStyle} value={selectedDog} onChange={(e) => setSelectedDog(e.target.value)}>
                <option value="">Selecciona una Evaluacion</option>
                {dogs.map((dog) => (
                    <option key={dog.id} value={dog.id}>
                    📑{dog.nombreM}
                    </option>
                ))}
            </select>
            <select style={inputStyle} value={selectedAdopter} onChange={(e) => setSelectedAdopter(e.target.value)}>
                <option value="">Selecciona un Estudiante</option>
                {adopters.map((adopter) => (
                    <option key={adopter.id} value={adopter.id}>
                        👤 {adopter.NameE}
                    </option>
                ))}
            </select>
            <button type="submit" style={buttonStyle}>Asignar</button>
        </form>
    );
};

AdoptionForm.propTypes = {
    dogs: PropTypes.array.isRequired,
    adopters: PropTypes.array.isRequired,
    onAdoptionSubmit: PropTypes.func.isRequired,
};

export default AdoptionForm;
