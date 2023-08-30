import { FaTimesCircle } from "react-icons/fa";

const Modal = ({setD, isActive, setIsActive}) => {

    const hidden = () => {
        setIsActive(false);
    }
     const hiddenAll = () => {
        hidden(); 
        setD(true)
     }

    return (
        <div className={`${isActive ? "z-20 opacity-100 ":"z-0 opacity-0"} transition-opacity duration-300 ease-in absolute z-40 w-full h-screen bg-[rgb(0,0,0,0.5)] grid place-items-center`}>
            <div className="sm:w-[50%] md:w-[400px] w-[75%] h-[25%] bg-white rounded-xl grid">
                <div className="flex w-full justify-end bg-red-600 rounded-t-xl p-[10px]">
                    <FaTimesCircle className="text-white" onClick={hidden} />
                </div>
                <p className="pl-[20px] py-[10px]">Do you wanna delete this task?</p>
                <div className="flex w-full justify-end gap-[10px] p-[20px]">
                    <button 
                        onClick={hidden}
                        className="bg-red-600 text-white font-bold p-[10px] rounded-md hover:bg-red-700"
                    >Cancelar</button>
                    <button 
                        onClick={hiddenAll}
                        className="p-[10px] bg-indigo-600 text-white font-bold rounded-md text-center hover:bg-indigo-700"
                    >Aceptar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal; 