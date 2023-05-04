const { removeFaL } = require('./src/index');
describe('removeFirstAndLast', () => {
   it('Should return null when a unique character is sended.',() => {
        expect(removeFaL('1')).toBeNull();
   })
});