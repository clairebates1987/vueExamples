var myTable = new Vue({
	el: '#myTable'.
	data: {
		lessons: [
			{ name: 'Test lesson 1', subject: 'Maths', slides: 2 },
			{ name: 'Test lesson 2', subject: 'English', slides: 8 },
			{ name: 'Test lesson 3', subject: 'Science', slides: 5 }
		],
		searchQuery: ''
	}
});