

describe("esVocal", ()=>{
    it('Debería retornar true para input "a"', ()=>{
        expect(esVocal("a")).toBe(true);
    })

    it('Debería retornar false para input "c"',()=>{
        expect(esVocal("c")).toBe(false);
    });
})
describe("contarVocales",()=>{
    it ("Debería...",()=>{
        expect(contarVocales("abc")).toEqual({
            a:1,e:0,i:0,o:0,u:0
        })
    })
})