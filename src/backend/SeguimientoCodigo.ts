export class LineaCodigo {
    indiceLinea!: number;
    explicacion!: string;
    colores: ColorRango[] = [];
    patron!: string;
    hashPatron: number = 0;
    substring: string = "";
    hashSubString: number = 0;
}

export class ColorRango {
    inicio!: number;
    final!: number;
    className!: string;
}