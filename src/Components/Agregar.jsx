
import { useEffect, useState } from "react";
import { FaPlus, FaEdit } from "react-icons/fa";


const Agregar = ({ setTareaEd, tareaEd, tareas, setTareas}) =>{

    const [tarea, setTarea] = useState(""); 
    const [taskEdit, setTaskEdit] = useState(""); 

    useEffect(() => {
        setTaskEdit(tareaEd); 
    }, [tareaEd]); 

    const hadleSubmit = (e) =>{
        e.preventDefault(); 
        if(tarea != ""){
            setTareas([...tareas, tarea]); 
            setTarea(""); 
            return; 
        } else if(taskEdit != ""){
            const newTasks = tareas.filter(x => x != tareaEd); 
            setTareas([taskEdit, ...newTasks]); 
            setTaskEdit(""); 
            setTareaEd(""); 
            return; 
        }

    }

    const hadleInput = (e) => {

        if(tareaEd === ""){
            setTarea(e.target.value);
            return; 
        }

        setTaskEdit(e.target.value); 

    }

    return (
        <form 
            className="flex mb-[20px] p-[18px] bg-white gap-[5px]"
            onSubmit={hadleSubmit}>
            <input 
                className="p-[9px] text-sm w-full outline-none border-black shadow-lg rounded-md focus:bg-stone-100" 
                type="text" 
                placeholder="Ingresa la tarea" 
                onChange={hadleInput}
                value={tareaEd ? taskEdit: tarea}
            /> 
            <button
                className="text-[18px] bg-zinc-200 hover:bg-zinc-300 text-black hover:text-zinc-900 text-center font-bold p-[10px] rounded-[100%] text-sm shadow" 
            >
                {taskEdit === "" ? (<FaPlus />):(<FaEdit />)}
                
            </button>
        </form>
    ); 
}

export default Agregar; 