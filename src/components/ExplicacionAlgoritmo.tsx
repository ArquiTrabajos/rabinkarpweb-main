

const ExplicacionAlgoritmo = () => {
    return (<>
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold my-4">¿Qué hace el algoritmo de Rabin-Karp?</h1>
            <div className="text-xl leading-loose text-justify" >
                <p>
                    El algoritmo de Rabin-Karp busca las coincidencias de una cadena patrón en un texto,
                    lo hace mediante comparaciones de hash.
                </p>
                <br/>
                <p>
                    Para comenzar, digita el patrón que quieres buscar, y digita el texto o selecciónalo desde un archivo de texto plano,
                    luego, puedes dar clic en buscar y el algoritmo buscará, contará y señalará todas las coincidencias encontradas,
                    así como un seguimiento al código del algoritmo. En la sección superior, puedes ver un video de cómo el algoritmo funciona,
                    así como un análisis de su complejidad.
                </p>
            </div>
        </div>
    </>)
}

export default ExplicacionAlgoritmo;