describe('triangles', function() {
	it('is an equilateral triangle if all sides are equal to each other', function() {
		expect(triangles(2, 2, 2)).to.equal("Equilateral");
	});

});
