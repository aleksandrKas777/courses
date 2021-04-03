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


    it('проверяем в массиве на числа', () => { 
		assert.equal(dowbleElem(['f']), 'в массиве присутсвуют не только числа'); 
	}); 
    it('проверяем в массиве на числа', () => { 
		assert.equal(dowbleElem(['']), 'в массиве присутсвуют не только числа'); 
	});
    it('проверяем в массиве на числа', () => { 
		assert.equal(dowbleElem([null, 4, 5]), 'в массиве присутсвуют не только числа'); 
	}); 
    it('проверяем в массиве на числа', () => { 
		assert.equal(dowbleElem([undefined, 1]), 'в массиве присутсвуют не только числа'); 
	}); 
    it('проверяем в массиве на числа', () => { 
		assert.equal(dowbleElem([0, 5, false]), 'в массиве присутсвуют не только числа'); 
	}); 


    it('проверяем удвоение массива', () => { 
		assert.deepEqual(dowbleElem([2, 5]), [4, 10]); 
	}); 
    it('проверяем удвоение массива', () => { 
		assert.deepEqual(dowbleElem([0]), [0]); 
	}); 


});
