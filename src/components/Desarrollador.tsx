import { FC } from "react";

type DesarrolladorType = {
    nombre: string,
    correo: string
}

const Desarrollador: FC<DesarrolladorType> = ({nombre, correo}) => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="text-lg font-bold">
                    {nombre}
                </div>
                <div className="text-sm text-gray-500">
                    {correo}
                </div>
            </div>
        </>
    )
}

export default Desarrollador;