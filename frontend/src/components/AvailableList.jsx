import PropTypes from 'prop-types';
import React from 'react';

function AvailableList({ dogs, adopters }) {
    const listStyle = {
        listStyleType: 'none',
        padding: '0',
        margin: '20px 0',
    };

    const listItemStyle = {
        padding: '10px',
        margin: '10px 0',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        color: 'black',
    };

    return (
        <div>
            <h2>Evaluaciones Disponibles 📑</h2>
            <ul style={listStyle}>
                {dogs.map((dog) => (
                    <React.Fragment key={dog.id}>
                        <li style={listItemStyle}>📑 {dog.nombreM}</li>
                        <ul style={listStyle}>
                            <li key={`preg1-${dog.id}`} style={listItemStyle}>{dog.preg1}</li>
                            <ul style={listStyle}>
                                <li key={`op1-${dog.id}`} style={listItemStyle}>{dog.op1}</li>
                                <li key={`op2-${dog.id}`} style={listItemStyle}>{dog.op2}</li>
                                <li key={`op3-${dog.id}`} style={listItemStyle}>{dog.op3}</li>
                                <li key={`op4-${dog.id}`} style={listItemStyle}>{dog.op4}</li>
                            </ul>
                        </ul>
                    </React.Fragment>
                ))}
            </ul>
            <h2>Estudiantes disponibles 👤</h2>
            <ul style={listStyle}>
                {adopters.map((adopter) => (
                    <React.Fragment key={adopter.id}>
                        <li style={listItemStyle}>👤 {adopter.NameE}</li>
                        <ul style={listStyle}>
                            <li key={`celular-${adopter.id}`} style={listItemStyle}>Celular: {adopter.Celular}</li>
                            <li key={`email-${adopter.id}`} style={listItemStyle}>Email: {adopter.Email}</li>
                            <li key={`cedula-${adopter.id}`} style={listItemStyle}>Cedula: {adopter.Cedula}</li>
                            <li key={`nivel-${adopter.id}`} style={listItemStyle}>Nivel: {adopter.Nivel}</li>
                            <li key={`edad-${adopter.id}`} style={listItemStyle}>Edad: {adopter.Edad}</li>
                        </ul>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

AvailableList.propTypes = {
  dogs: PropTypes.array.isRequired,
  adopters: PropTypes.array.isRequired,
};

export default AvailableList;
