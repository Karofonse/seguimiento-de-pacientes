

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const {nombre, propietario, email, fecha, sintomas,id}=paciente
    const handleEliminar = () => {
        // console.log('Eliminando...')
        const respuesta = confirm('¿Deseas eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
return (

    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre de la Mascota: {''}
        <span className='font-normal normal-case'>{nombre}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre del Propietario {''}
        <span className='font-normal normal-case'>{propietario}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Email del Propietario: {''}
        <span className='font-normal normal-case'>{email}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Alta: {''}
        <span className='font-normal normal-case'>{fecha}</span>
    </p>

    <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
    </p>

    <div className="flex justify-between mt-10">
        <button
        type="button"
        className="py-2 px-10 bg-green-600 hover:bg-green-800 text-white font-bold
        uppercase rounded-lg"
        onClick={()=> setPaciente(paciente)}
        >  Editar</button>

<button
        type="button"
        className="py-2 px-10 bg-red-600 hover:bg-green-800 text-white font-bold
        uppercase rounded-lg"
        onClick={handleEliminar}
        >Eliminar</button>
    </div>
</div>
)
}

export default Paciente