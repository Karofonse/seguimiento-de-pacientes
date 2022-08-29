import {useState, useEffect} from 'react'
import Error from './Error';
import Paciente from './Paciente';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] =useState('');
    const [propietario, setPropietario] =useState('');
    const [email, setEmail] =useState('');
    const [fecha, setFecha] =useState('');
    const [sintomas, setSintomas] =useState('');

    const [error, setError] = useState(false)
    useEffect(()=>{
        console.log(paciente);
    }, [paciente])
    
    useEffect(()=>{
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).slice(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit=(e) =>{
    e.preventDefault();

    //Validación del formulario
    if([nombre, propietario, email, fecha,sintomas].includes('')){
        console.log('Hay al menos un campo vacio')
        setError(true)
        return;
    }
        setError(false)

        // Objeto de Paciente
        const objetoPaciente={
            nombre, 
            propietario,
            email,
            fecha,
            sintomas,
        }
        if(paciente.id){
            // editando el resgistro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
                paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({}) //aqui se regresa a un objeto 

        }else{
            // nuevo registro
            objetoPaciente.id= generarId()
            setPacientes([... pacientes, objetoPaciente])
        }

        // reiniciar el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')


    }
    return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center'>
            Añade Pacientes y {''}
            <span className='text-green-600 font-bold'>Administralos</span>
        </p>
        <form
        onSubmit={handleSubmit}
        className='bg-white shadow-xl rounded-xl py-10 px-5 mt-10 ml-8 mb-10'>
        
        {error && <Error><p>Todos los campos son obligatorios</p></Error> }

            <div className='mb-5'>
                <label htmlFor='mascota' className='block text-gray-700 uppercase
                font-bold'>Nombre de la Mascota</label>
                <input 
                type="text" 
                id='mascota'
                placeholder='Nombre de la Mascota'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={nombre}
                onChange =  { (e) => setNombre(e.target.value) } //es un callback
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='block text-gray-700 uppercase
                font-bold'>Nombre del propietario</label>
                <input 
                type="text" 
                id='propietario'
                placeholder='Nombre del Propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={propietario}
                onChange =  { (e) => setPropietario(e.target.value) }
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block text-gray-700 uppercase
                font-bold'>Email</label>
                <input 
                type="email" 
                id='email'
                placeholder='Email contacto del propietario'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={email}
                onChange =  { (e) => setEmail(e.target.value) }
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block text-gray-700 uppercase
                font-bold'>Fecha de Alta</label>
                <input 
                type="date" 
                id='alta'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                value={fecha}
                onChange =  { (e) => setFecha(e.target.value) }
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block text-gray-700 uppercase
                font-bold'>Sintomas </label>
                <textarea 
                id="sintomas"  
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe los sintomas'
                value={sintomas}
                onChange =  { (e) => setSintomas(e.target.value) }>
                </textarea>
            </div>
            <input type="submit"
            className='bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-800 cursor-pointer transition-all'
            value={ paciente.id ? 'Editar paciente': 'Agregar paciente'}/>
        </form>
    </div>
    )
}

export default Formulario;
