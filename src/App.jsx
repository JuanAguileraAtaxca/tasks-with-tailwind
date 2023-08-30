import { useState, useEffect } from "react";
import { FaPlus, FaCheck } from "react-icons/fa";
import Agregar from "./Components/Agregar";
import Tarea from "./Components/Tarea";
import Modal from "./Components/Modal";

const App = () => {

    const [tareas, setTareas] = useState([]); 
    const [tareaEd, setTareaEd] = useState(""); 
    const [tareaDe, setTareaD] = useState(""); 
    const [isActive, setIsActive] = useState(false);
    const [d, setD] = useState(false); 

    useEffect(() => {
        if(tareaDe){
            const newTasks = tareas.filter(x => x != tareaDe); 
            console.log(newTasks); 
            setTimeout(() => {
                setTareas(newTasks);    
            }, 1000);
            setD(false);
            setTareaD("");
        }
    }, [d]); 

    const deleteAllTasks = () => setTareas([]); 

    return (
        <>

            <Modal setD={setD} isActive={isActive} setIsActive={setIsActive}/>
            <div className="z-10 xl:w-[700px] md:w-[50%] w-[87%] mx-auto mt-[50px] md:mt-[70px] p-[18px] rounded-lg">
                
                <Agregar setTareaEd={setTareaEd} tareaEd={tareaEd} tareas={tareas} setTareas={setTareas}/>
                {tareas.length > 0 ? (
                    <div className="bg-white p-[10px] max-h-[60vh] md:max-h-[50vh] overflow-y-scroll overflow-hidden">
                        {tareas.map((tarea, i) => (
                            <Tarea 
                                key={i} 
                                setTareaEd={setTareaEd} 
                                tarea={tarea} tareas={tareas} 
                                setTareas={setTareas}
                                setIsActive={setIsActive}
                                setTareaD={setTareaD}
                                d={d}
                                tareaDe={tareaDe}
                            />)
                        )}
                        
                        <div className="flex justify-center mt-[15px]">
                            <button 
                                className="bg-blue-700 hover:bg-blue-800 px-[8px] py-[10px] rounded-md font-bold text-white w-[120px] text-center"
                                onClick={deleteAllTasks}    
                            >
                                delete all 
                            </button>
                        </div>
                    </div>
                ):(
                    <div className="bg-white text-center px-[20px] py-[40px]"> 
                        <h3 className="font-extrabold text-[20px] text-zinc-600">No hay tareas </h3> 
                    </div>
                )}
                
            </div>
        </>
        
    );
}

export default App; 