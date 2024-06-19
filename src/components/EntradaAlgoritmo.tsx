import { Button, FileInput, Label, Textarea, TextInput } from "flowbite-react";
import { ChangeEvent, MouseEvent, useState } from "react";


const EntradaAlgoritmo = () => {
    const [patron, setPatron] = useState('');
    const [texto, setTexto] = useState('');


    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            const fr: FileReader = new   FileReader();
            fr.readAsText(e.target.files[0], "UTF-8");
            fr.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
                setTexto(readerEvent.target?.result?.toString()!);
            };
        }
    }

    const handleBuscarClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(texto);
        
    }

    return (
        <div className="h-full flex flex-col">
            <div>
                <div className="mb-2 flex">
                    <Label htmlFor="patron" value="Digita el patrón aquí" />
                </div>
                <TextInput className="font-mono" id="patron" type="text" required value={patron} onChange={e => setPatron(e.target.value)} />
            </div>
            <div className="h-[70%]">
                <div className="my-2 flex justify-between items-center">
                    <Label htmlFor="texto" value="Digita el texto aquí" />
                    ó
                    <FileInput className="w-[50%]" onChange={handleFileChange} accept=".txt, .html, .js, .css, .cpp, .py, .c, .ts, .jsx, .tsx, .java" />
                </div> 
                <Textarea  className="h-[80%] font-mono resize-none" id="texto" required value={texto} onChange={e => setTexto(e.target.value)} />
            </div>
            <div>
                <Button onClick={handleBuscarClick} className="bg-orange my-3 text-white w-full">Buscar Coincidencias</Button>
            </div>
        </div>
    );
}

export default EntradaAlgoritmo;