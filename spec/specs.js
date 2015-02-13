describe('triangles', function() {
	it('is an equilateral triangle if all sides are equal to each other', function() {
		expect(triangles(2, 2, 2)).to.equal(" an Equilateral");
	});
	it('is an isosceles triangle if two sides are equal to each other', function() {
		expect(triangles(2, 2, 3)).to.equal(" an Isosceles");
	});
	it('is a scalene triangle if no sides are equal to each other', function() {
		expect(triangles(2, 3, 4)).to.equal(" a Scalene");
	});
	it('is not a triangle if one side is at least the length of the other two combined, scalene-like', function() {
		expect(triangles(2, 3, 5)).to.equal(" NOT a");
	});
	it('is not a triangle if one side is at least the length of the other two combined, isosceles-like', function() {
		expect(triangles(3, 3, 6)).to.equal(" NOT a");
	});

});
