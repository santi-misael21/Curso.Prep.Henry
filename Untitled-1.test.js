const {isVowel, countVowels} =require(".");

describe("isVowel", ()=>{
    it('Debería retornar true para input "a"', ()=>{
        expect(isVowel("a")).toBe(true);
    })

    it('Debería retornar false para input "c"',()=>{
        expect(isVowel("c")).toBe(false);
    });
})
describe("countVowels",()=>{
    it ("Debería...",()=>{
        expect(countVowels("abc")).toEqual({
            a:1,e:0,i:0,o:0,u:0
        })
    })
})