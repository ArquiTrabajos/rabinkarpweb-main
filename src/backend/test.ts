import buscar from "./RabinKarp";
const fs = await import("fs");
const p: string = "ola";
const t: string = `ola paola, tía paola, come mamola y se peina sola.`;
fs.writeFileSync('out.json', JSON.stringify(buscar(p,t)))

