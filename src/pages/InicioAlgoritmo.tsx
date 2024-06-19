import EntradaAlgoritmo from "../components/EntradaAlgoritmo";
import ExplicacionAlgoritmo from "../components/ExplicacionAlgoritmo";


const InicioAlgoritmo = () => {
    return (
        <>
            <div className="flex">
                <div className="w-6/12 m-5">
                    <ExplicacionAlgoritmo />
                </div>
                <div className="w-6/12 m-5 pt-5">
                    <EntradaAlgoritmo />
                </div>
            </div>
        </>
    )
}

export default InicioAlgoritmo;