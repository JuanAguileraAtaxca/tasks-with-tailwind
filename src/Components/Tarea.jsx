
import { useEffect, useState } from "react";

import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";

const Tarea = ({ tareaDe, d, setTareaEd, tarea, setIsActive, setTareaD}) => {

    const [isChecked, setIsChecked] = useState(false);
    const [remove, setRemove ] = useState(false); 

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setRemove(false); 
            }, 1001); 
        }
    }, []);

    useEffect(() => {
        if(tareaDe){
            setRemove(!remove); 
        }
    },[d]); 

    const deleteTask = () => {
        setIsActive(true); 
        setTareaD(tarea); 
    }

    return (
        <div className={`${tarea && !remove ? "animate-jump-in": ""} ${remove && "animate-jump-out"} border-b-[1.5px] border-stone-300 border-solid py-[10px] px-[5px]`}>
            <div className="flex items-center gap-[15px]">
                <div className="grid place-items-center">
                    {isChecked ? (
                        <FaCheck className="text-[19px] text-indigo-800" onClick={() => {setIsChecked(!isChecked)}}/>
                    ):(
                        <div className="flex gap-[5px]">
                            <div 
                                className="w-[22px] h-[22px] block border-[2.9px] border-indigo-900 rounded shadow-lg"
                                onClick={() => {setIsChecked(!isChecked)}}
                            ></div>
                            <button 
                                className="grid place-items-center w-[22px] h-[22px] "
                                onClick={deleteTask}
                            >
                                <FaTimes className="text-[19px]"/>
                            </button>
                            <button className="grid place-items-center w-[22px] h-[22px]">
                                <FaEdit className="text-[19px]" onClick={() => setTareaEd(tarea)} />
                            </button>
                        </div>
                    )}
                </div>

                {isChecked ? (
                    <div className="relative w-full h-[20px] overflow-hidden grid place-items-center">
                        <div className={`${isChecked && "animate-left-to-right"} absolute h-[5px] w-full bg-indigo-800 shadow-lg`}></div>
                    </div>
                ) : (
                    <p className="font-bold">{tarea}</p>

                ) }
                {/*<p className={`font-bold ${isChecked ?"line-through":"no-underline"}`}>{tarea}</p>*/}
            </div>
        </div>
    );
}

export default Tarea; 