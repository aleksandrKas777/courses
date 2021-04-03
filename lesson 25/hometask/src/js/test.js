describe('dowbleElem', function() { 
	it('проверяем передан ли массив', () => { 
		assert.equal(Array.isArray(dowbleElem([])), true); 
	}); 
    it('проверяем передан ли массив', () => { 
		assert.equal(Array.isArray(dowbleElem('45')), false); 
	}); 
    it('проверяем передан ли массив', () => { 
		assert.equal(Array.isArray(dowbleElem(15)), false); 
	}); 
    it('проверяем передан ли массив', () => { 
		assert.equal(Array.isArray(dowbleElem(true)), false); 
	}); 
    it('проверяем передан ли массив', () => { 
		assert.equal(Array.isArray(dowbleElem()), false); 
	}); 


    it('проверяем в массиве не числа', () => { 
		assert.equal(dowbleElem(['f']), 'в массиве присутсвуют не только числа'); 
	}); 
});
