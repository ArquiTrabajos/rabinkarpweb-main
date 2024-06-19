import { ColorRango, LineaCodigo } from "./SeguimientoCodigo";

export const MOD = 1000000009;
export const ALPHA = 256;

const stringToAsciiVector = (str: string): number[] => {
    return str.split('').map(e => e.charCodeAt(0));
}

const lineas: LineaCodigo[] = [];
const diezE9mas7: string = "10<sup>9</sup>+7";

const registrarLinea = (linea: LineaCodigo): void => {
    lineas.push(linea);
}

const buscar = (pat: string, txt: string): LineaCodigo[] => {
    lineas.length = 0;
    const pattern: number[] = stringToAsciiVector(pat);
    const text: number[] = stringToAsciiVector(txt);
    const m: number = pattern.length;
    const n: number = text.length;
    const indexes: number[] = [];
    registrarLinea({
        indiceLinea: 1,
        explicacion: `Llamamos al método de Rabin-Karp, ` +
            `buscaremos las coincidencias del patrón en el texto`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 2,
        explicacion: `Inicializamos el vector que guardará los índices de las coindicencias`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 3,
        explicacion: `Inicializamos m como el tamaño del patrón, y n como el tamaño del texto`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 4,
        explicacion: `Inicializamos el tamaño del alfabeto, ` +
            `en este caso, usaremos los caracteres de la tabla ASCII, ` +
            `por lo que será un alfabeto de ${ALPHA} caracteres.`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 5,
        explicacion: `Inicializamos la variable del módulo, ` +
            `se utiliza un número primo grande, como ${diezE9mas7}, ` +
            `para disminuir las colisiones.`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 6,
        explicacion: `Inicializamos en 0 las variables que representarán los hashes del patrón y del substring, ` +
            `también inicializamos una variable que representará la potencia maxima del patrón, siendo esta ` +
            `alfabeto<sup>m-1</sup> = ${ALPHA}<sup>${m - 1}</sup> = ${Math.pow(ALPHA, m-1)%MOD}.`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    registrarLinea({
        indiceLinea: 7,
        explicacion: `Preguntamos si el patrón es mas grande que el texto`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    if (m > n) {
        registrarLinea({
            indiceLinea: 8,
            explicacion: `${m} > ${n}, por lo que es imposible encontrar coindicencias.`,
            patron: pat,
            colores: [],
            hashPatron: 0,
            hashSubString: 0,
            substring: ""
        });
        return [];
    }
    registrarLinea({
        indiceLinea:10,
        explicacion: `Realizamos un ciclo desde 0 hasta m-1 (${m-1})`,
        patron: pat,
        colores: [],
        hashPatron: 0,
        hashSubString: 0,
        substring: ""
    });
    let hashPattern: number = 0;
    let hashSubText: number = 0;
    let potencia: number = 1;
    let substr: string = "";
    for (let i = 0; i < m; ++i) {
        hashPattern = (hashPattern * ALPHA + pattern[i]) % MOD;
        registrarLinea({
            indiceLinea: 11,
            explicacion: `Calculamos el valor del hash del patrón hasta el caracter ${i}`,
            patron: pat,
            colores: [],
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        hashSubText = (hashSubText * ALPHA + text[i]) % MOD;
        substr += String.fromCharCode(text[i]);
        registrarLinea({
            indiceLinea: 12,
            explicacion: `Calculamos el valor del hash del texto hasta el caracter ${i}`,
            patron: pat,
            colores: [],
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        if (i !== m - 1)
            potencia = (potencia * ALPHA) % MOD;
    }
    registrarLinea({
        indiceLinea: 14,
        explicacion: `Ya tenemos calculados tanto el hash del patrón como del substring [0..${m-1}] del texto`,
        patron: pat,
        colores: [],
        hashPatron: hashPattern,
        hashSubString: hashSubText,
        substring: substr
    });
    registrarLinea({
        indiceLinea: 15,
        explicacion: `Iteramos desde 0 hasta ${n-m}, ya que es la cantidad de substrings de largo ${m} que hay en el texto`,
        patron: pat,
        colores: [],
        hashPatron: hashPattern,
        hashSubString: hashSubText,
        substring: substr
    });
    const colores: ColorRango[] = [{
        className: "bg-lightblue",
        inicio: 0,
        final: m-1
    }];
    for (let i = 0; i < n - m; ++i) {
        registrarLinea({
            indiceLinea: 16,
            explicacion: `Comparamos si los 2 hashes son iguales.`,
            patron: pat,
            colores: colores.map(e=>{return {...e}}),
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        if (hashPattern === hashSubText) {
            registrarLinea({
                indiceLinea: 16,
                explicacion: `${hashPattern} == ${hashSubText}, por lo que encontramos una coindicencia de hash, ahora, debemos mirar si es una colisión, o una coincidencia.`,
                patron: pat,
                colores: colores.map(e=>{return {...e}}),
                hashPatron: hashPattern,
                hashSubString: hashSubText,
                substring: substr
            });
            let j = 0;
            registrarLinea({
                indiceLinea: 18,
                explicacion: `Verificamos uno a uno los caracteres del patrón y del substring, verificando que todos sean iguales.`,
                patron: pat,
                colores: colores.map(e=>{return {...e}}),
                hashPatron: hashPattern,
                hashSubString: hashSubText,
                substring: substr
            });
            for (; j < m; ++j) {
                if (pattern[j] !== text[i + j]) {
                    break;
                }
            }
            registrarLinea({
                indiceLinea: 21,
                explicacion: `Verifico que se haya comparado hasta el ultimo caracter del patrón y substring.`,
                patron: pat,
                colores: colores.map(e=>{return {...e}}),
                hashPatron: hashPattern,
                hashSubString: hashSubText,
                substring: substr
            });
            if (j === m) {
                colores[0].className = "";
                colores.push({
                    className: "bg-orange",
                    inicio: i,
                    final: i+m-1
                })
                registrarLinea({
                    indiceLinea: 22,
                    explicacion: `Ya que verificamos que todos los caracteres del patrón y el substring son iguales, encontramos una coincidencia, la marcamos y guardamos su indice en el vector de coincidencias encontradas.`,
                    patron: pat,
                    colores: colores.map(e=>{return {...e}}),
                    hashPatron: hashPattern,
                    hashSubString: hashSubText,
                    substring: substr
                });
                indexes.push(i);
            }
        }
        colores[0].className = "bg-lightblue";
        
        registrarLinea({
            indiceLinea: 25,
            explicacion: `Procedemos a actualizar el hash para que represente el siguiente rango [${i+1}...${i+m+1}].`,
            patron: pat,
            colores: colores.map(e=>{return {...e}}),
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        hashSubText = (hashSubText - text[i] * potencia) % MOD;
        colores[0].inicio = i+1;
        substr = substr.substring(1);
        registrarLinea({
            indiceLinea: 26,
            explicacion: `Le restamos al hash el valor del elemento más a la derecha, para esto, le restamos texto[${i}] * potencia = ${text[i] * potencia}, tras restar, le aplicamos modulo de ${diezE9mas7}.`,
            patron: pat,
            colores: colores.map(e=>{return {...e}}),
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        hashSubText = (hashSubText * ALPHA) % MOD
        registrarLinea({
            indiceLinea: 27,
            explicacion: `Multiplicamos el valor del hash por el tamaño del alfabeto (${ALPHA}), esto debido a que cada posición que existe en el substring pasa a tener ${ALPHA} veces el valor que tenia antes, y luego le aplicamos modulo ${diezE9mas7}.`,
            patron: pat,
            colores: colores.map(e=>{return {...e}}),
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        hashSubText = (hashSubText + text[i+m]) % MOD
        colores[0].final = i+m;
        substr += String.fromCharCode(text[i+m])
        registrarLinea({
            indiceLinea: 28,
            explicacion: `Finalmente, le sumamos el valor del nuevo caracter que habrá en el substring, que será ${text[i+m]}, aplicando luego módulo de ${diezE9mas7}.`,
            patron: pat,
            colores: colores.map(e=>{return {...e}}),
            hashPatron: hashPattern,
            hashSubString: hashSubText,
            substring: substr
        });
        if (hashSubText < 0) {
            hashSubText += MOD;    
            registrarLinea({
                indiceLinea: 29,
                explicacion: `Dado que puede que nos haya quedado un valor negativo, lo que debemos hacer es sumarle ${diezE9mas7} para volverlo a poner en el rango de valores del hash.`,
                patron: pat,
                colores: colores.map(e=>{return {...e}}),
                hashPatron: hashPattern,
                hashSubString: hashSubText,
                substring: substr
            });        
        }
    }
    colores.shift();
    registrarLinea({
        indiceLinea: 31,
        explicacion: `Tras iterar por todos los substrings de largo ${m} del texto, retornamos los indices encontrados: ${indexes.join(", ")}`,
        patron: pat,
        colores: colores.map(e=>{return {...e}}),
        hashPatron: hashPattern,
        hashSubString: hashSubText,
        substring: substr
    });  
    return lineas;
}

export default buscar;