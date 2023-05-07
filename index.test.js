const { removeFaL } = require('./src/index');
describe('removeFirstAndLast', () => {
   it('Should return null when a unique character is sended.',() => {
        expect(removeFaL('1')).toBeNull();
   })

   it('Should return null when two characters are sended.', () => {
        expect(removeFaL('12')).toBeNull();
   });

   it(' Should return the number "2" when "123" as sended ', () => {
        expect(removeFaL('123')).toBe("2");
   });

   it('Should return "23" when "1234" is sended', () => {
        expect(removeFaL('1234')).toBe("23");
   });
});