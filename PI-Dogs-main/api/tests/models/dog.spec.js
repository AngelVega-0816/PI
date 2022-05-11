const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({name: "pug"});
      });
    });
    describe('heightMin', () => {
      it('should throw an error if heightMin is null', (done) => {
        Dog.create({name: "prueba", heightMin: null, heightMax: 11, weightMin: 10, weightMax: 11})
        .then(() => done(new Error('It requires a valid height Min')))
        .catch(() => done());
      });
      it('should work when it is a valid height', () => {
        Dog.create({name: "prueba", heightMin: 11, heightMax: 10, weightMin: 10, weightMax: 11})
      });
    });
  });
});
