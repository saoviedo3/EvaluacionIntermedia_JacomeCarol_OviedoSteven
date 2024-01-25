// App.jsx
import { useState, useEffect } from 'react';
import AdoptionForm from './components/AdoptionForm';
import AdoptionList from './components/AdoptionList';
import AvailableList from './components/AvailableList';
import AddDogForm from './components/AddDogForm';
import AddAdopterForm from './components/AddAdopterForm';

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [adopters, setAdopters] = useState([]);
  const [adoptions, setAdoptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsResponse = await fetch('http://localhost:3001/dogs');
        const dogsData = await dogsResponse.json();
        setDogs(dogsData);

        const adoptersResponse = await fetch('http://localhost:3001/adopters');
        const adoptersData = await adoptersResponse.json();
        setAdopters(adoptersData);

        const adoptionsResponse = await fetch('http://localhost:3001/adoptions');
        const adoptionsData = await adoptionsResponse.json();
        console.log('Adopciones:', adoptionsData);
        setAdoptions(adoptionsData);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleAdoptionSubmit = async (dogId, adopterId) => {
    try {
      const response = await fetch('http://localhost:3001/adoptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dogId,
          adopterId,
        }),
      });

      if (response.ok) {
        const newAdoption = await response.json();
        setAdoptions((prevAdoptions) => [...prevAdoptions, newAdoption]);

        // Mostrar una alerta con los datos de la nueva adopción
        alert(`¡Adopción realizada con éxito!\nID: ${newAdoption.id}\nPerro: ${newAdoption.dogId}\nAdoptante: ${newAdoption.adopterId}`);
      } else {
        throw new Error('Error al enviar la solicitud de adopción.');
      }
    } catch (error) {
      console.error('Error en la solicitud de adopción:', error.message);
      throw error;
    }
  };

  const handleDogSubmit = async (nombreM, preg1, op1, op2, op3, op4) => {
    try {
      const response = await fetch('http://localhost:3001/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombreM, 
          preg1, 
          op1, 
          op2, 
          op3, 
          op4,
        }),
      });

      if (response.ok) {
        const newDog = await response.json();
        console.log(newDog)
        setDogs((prevDogs) => [...prevDogs, newDog]);

        // Mostrar una alerta con los datos de la nueva adopción
        alert(`¡Evaluacion realizada con éxito!\nID: ${newDog.id}\nNombre: ${newDog.nombreM}\nPregunta: ${newDog.preg1}\nOpcion A: ${newDog.op1}\nOpcion B: ${newDog.op2}\nOpcion C: ${newDog.op3}\nOpcion D: ${newDog.op4}`);
      } else {
        throw new Error('Error al enviar la solicitud de Evaluacion.');
      }
    } catch (error) {
      console.error('Error en la solicitud de Evaluacion:', error.message);
      throw error;
    }
  };

  const handleAdopterSubmit = async (NameE, Celular, Email, Cedula, Nivel, Edad) => {
    try {
      const response = await fetch('http://localhost:3001/adopters', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NameE, 
          Celular, 
          Email, 
          Cedula, 
          Nivel, 
          Edad,
        }),
      });

      if (response.ok) {
        const newAdopter = await response.json();
        console.log(newAdopter)
        setAdopters((prevAdopters) => [...prevAdopters, newAdopter]);

        // Mostrar una alerta con los datos de la nueva adopción
        alert(`¡Evaluacion realizada con éxito!\nID: ${newAdopter.id}\nNombre: ${newAdopter.NameE}\nCelular: ${newAdopter.Celular}\nEmail: ${newAdopter.Email}\nCedula: ${newAdopter.Cedula}\nNivel: ${newAdopter.Nivel}\nEdad: ${newAdopter.Edad}`);
      } else {
        throw new Error('Error al enviar la solicitud de Evaluacion.');
      }
    } catch (error) {
      console.error('Error en la solicitud de Estudiante:', error.message);
      throw error;
    }
  };

  return (
    <div className="App">
      <h1>Lista de Evaluaciones Asigandas</h1>
      <AdoptionList adoptions={adoptions} dogs={dogs} adopters={adopters} />
      <h1>Disponibles para Asignacion</h1>
      <AvailableList dogs={dogs} adopters={adopters} />
      <h1>Agregar nueva Evaluacion</h1>
      <AddDogForm onDogSubmit={handleDogSubmit} />
      <h1>Agregar nuevo Estudiante</h1>
      <AddAdopterForm onAdopterSubmit={handleAdopterSubmit} />
      <h1>Asignar Evaluacion</h1>
      <AdoptionForm dogs={dogs} adopters={adopters} onAdoptionSubmit={handleAdoptionSubmit} />
    </div>
  );
};

export default App;
