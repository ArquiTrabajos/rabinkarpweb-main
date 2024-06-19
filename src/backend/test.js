import buscar from "./RabinKarp.js";
const fs = await import("fs");
const p = "ola";
const t = `ola paola, tía paola, come mamola y se peina sola.`;
fs.writeFileSync('out.json', JSON.stringify(buscar(p, t)));
