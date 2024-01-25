import PropTypes from 'prop-types';

function AdoptionList({ adoptions, dogs, adopters }) {
    // Si los datos aún no están disponibles, renderiza un mensaje de carga
    if (!adoptions.length || !dogs.length || !adopters.length) {
        return <p>Cargando...</p>;
    }

    const tableStyle = {
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        borderCollapse: 'collapse',
        backgroundColor: '#f8f9fa',
        borderRadius: '15px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    };

    const tableRowStyle = {
        borderBottom: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        color: 'black',
    };

    return (
        <table style={tableStyle}>
            <thead>
                <tr style={tableRowStyle}>
                    <th>Evaluacion</th>
                    <th>Estudiante</th>
                </tr>
            </thead>
            <tbody>
                {adoptions.map((adoption) => {
                    const dog = dogs.find((dog) => dog.id === Number(adoption.dogId));
                    const adopter = adopters.find((adopter) => adopter.id === Number(adoption.adopterId));
                    return (
                        <tr key={adoption.id} style={tableRowStyle}>
                            <td>{dog && `📑 ${dog.nombreM}`}</td>
                            <td>{adopter && `👤 ${adopter.NameE}`}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

AdoptionList.propTypes = {
  adoptions: PropTypes.array.isRequired,
  dogs: PropTypes.array.isRequired,
  adopters: PropTypes.array.isRequired,
};

export default AdoptionList;
