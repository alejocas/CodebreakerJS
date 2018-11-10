const assert = require('assert');
const Codebreaker = require('../models/Codebreaker');
const cb = new Codebreaker();


describe('Codebreaker', () => {
    describe('#guess()', () => {
        it('should return X when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('1789'), 'X');
        });

        it('should return _ when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('7189'), '_');
        });

        it('should return X_ when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('1782'), 'X_');
        });

        it('should return _ when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('7189'), '_');
        });

        it('should return XX_ when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('1247'), 'XX_');
        });

        it('should return XXXX when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('1234'), 'XXXX');
        });

        it('should return ____ when the secret is 1234', () => {
            cb.setSecret('1234')
            assert.equal(cb.guess('2341'), '____');
        });

        it('should return XXXX when the secret is 6578', () => {
            cb.setSecret('6578')
            assert.equal(cb.guess('6578'), 'XXXX');
        });

        it('should return ____ when the secret is 1234', () => {
            cb.setSecret('6578')
            assert.equal(cb.guess('8765'), '____');
        });

        it('should return XX__ when the secret is 6578', () => {
            cb.setSecret('9876')
            assert.equal(cb.guess('9867'), 'XX__');
        });
    });
});