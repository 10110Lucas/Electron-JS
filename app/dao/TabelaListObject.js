class TabelaListObject {

    constructor(){
        this._listando = [];
    }

    create(objeto){
        this._listando.push(objeto);
    }

    get select(id){
        return this._listando[(id - 1)];
    }

    get list(){
        return [].concat(this._listando);
    }
}