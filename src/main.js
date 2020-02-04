class Fabricante {

    constructor(nomeFabricante, pais ){
        this.fabricante = nomeFabricante;
        this.paisOrigem = pais
        this.chassi = this.gerarChassi();
    }

    gerarChassi(){
        return Math.random();
    }
}


class Carro extends Fabricante {

    constructor( fabricante, pais, nomeCarro ) {
        super(fabricante, pais);

        this._modelo = nomeCarro;

    }

    get modelo(){
        return this._modelo;
    }

    acelerar(){
        return 'Vrunnnn';
    }

    buzinar(){
        return 'Biiiii to passando!';
    }

    retornaFabricante(){
        return this.fabricante;
    }
}


class Utilidade {
   static tudoMaiusculo( texto ){
        return texto.toUpperCase();
    }

    static tudoMinusculo( texto ){
        return texto.toUpperCase();
    }
}



const civic = new Carro('Honda', 'Japão', 'Civic');
console.log( civic );


console.log( Utilidade.tudoMaiusculo( civic.retornaFabricante() ) );

console.log( Utilidade.tudoMaiusculo( civic.acelerar() ) );

console.log( civic.modelo );