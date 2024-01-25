import { useState } from 'react';
import PropTypes from 'prop-types';

const AddDogForm = ({ onDogSubmit }) => {
    const [nombreM, setNombreM] = useState('');
    const [preg1, setPreg1] = useState('');
    const [op1, setOp1] = useState('');
    const [op2, setOp2] = useState('');
    const [op3, setOp3] = useState('');
    const [op4, setOp4] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombreM && preg1 && op1 && op2 && op3 && op4) {
            onDogSubmit({ nombreM: nombreM, preg1: preg1, op1: op1, op2: op2, op3: op3, op4: op4 });
            setNombreM('');
            setPreg1('');
            setOp1('');
            setOp2('');
            setOp3('');
            setOp4('');
        } else {
            console.error('Debe ingresar todos los campos.');
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
            <input type="text" value={nombreM} onChange={(e) => setNombreM(e.target.value)} placeholder="Nombre de la Materia" style={inputStyle} />
            <input type="text" value={preg1} onChange={(e) => setPreg1(e.target.value)} placeholder="Pregunta 1" style={inputStyle} />
            <input type="text" value={op1} onChange={(e) => setOp1(e.target.value)} placeholder="Respuesta A" style={inputStyle} />
            <input type="text" value={op2} onChange={(e) => setOp2(e.target.value)} placeholder="Respuesta B" style={inputStyle} />
            <input type="text" value={op3} onChange={(e) => setOp3(e.target.value)} placeholder="Respuesta C" style={inputStyle} />
            <input type="text" value={op4} onChange={(e) => setOp4(e.target.value)} placeholder="Respuesta D" style={inputStyle} />

            <button type="submit" style={buttonStyle}>Agregar Evaluacion</button>
        </form>
    );
};

AddDogForm.propTypes = {
    onDogSubmit: PropTypes.func.isRequired,
};

export default AddDogForm;
