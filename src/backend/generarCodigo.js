const fs = await import('fs');

const codigo = fs.readFileSync('codigo.txt', {encoding: "utf8"}).toString().split("\r\n")


var codeOut = "const lineasCodigo: string[] = ['',"
var lines = [];
for(let i = 0; i < codigo.length; ++i){
    lines.push(`\r\n"${codigo[i].trim()}"`)
}

codeOut += lines.join(",")

codeOut += "\r\n];";

codeOut += "\r\n\r\nexport default lineasCodigo;"

fs.writeFileSync('lineasCodigo.ts', codeOut)
