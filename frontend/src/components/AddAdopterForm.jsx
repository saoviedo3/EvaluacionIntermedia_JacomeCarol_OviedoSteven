import { useState } from 'react';
import PropTypes from 'prop-types';

const AddAdopterForm = ({ onAdopterSubmit }) => {
    const [NameE, setNameE] = useState('');
    const [Celular, setCelular] = useState('');
    const [Email, setEmail] = useState('');
    const [Cedula, setCedula] = useState('');
    const [Nivel, setNivel] = useState('');
    const [Edad, setEdad] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (NameE && Celular && Email && Cedula && Nivel && Edad) {
            onAdopterSubmit({ NameE: NameE, Celular: Celular, Email: Email, Cedula: Cedula, Nivel: Nivel, Edad: Edad });
            setNameE('');
            setCelular('');
            setEmail('');
            setCedula('');
            setNivel('');
            setEdad('');
        } else {
            console.error('Debe ingresar un nombre para el estudiante.');
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
            <input type="text" value={NameE} onChange={(e) => setNameE(e.target.value)} placeholder="Nombre del estudiante" style={inputStyle} />
            <input type="text" value={Celular} onChange={(e) => setCelular(e.target.value)} placeholder="Celular" style={inputStyle} />
            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={inputStyle} />
            <input type="text" value={Cedula} onChange={(e) => setCedula(e.target.value)} placeholder="Cedula" style={inputStyle} />
            <input type="text" value={Nivel} onChange={(e) => setNivel(e.target.value)} placeholder="Nivel" style={inputStyle} />
            <input type="text" value={Edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" style={inputStyle} />

            <button type="submit" style={buttonStyle}>Agregar estudiante</button>
        </form>
    );
};

AddAdopterForm.propTypes = {
    onAdopterSubmit: PropTypes.func.isRequired,
};

export default AddAdopterForm;
