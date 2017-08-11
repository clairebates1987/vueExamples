var myTable = new Vue({
	el: '#lessons',
	data: {
		lessonColumns: [ 'Name', 'Subject', 'No of. Slides' ]
		lessons: [
			{ name: 'Test lesson 1', subject: 'Maths', slides: 2 },
			{ name: 'Test lesson 2', subject: 'English', slides: 8 },
			{ name: 'Test lesson 3', subject: 'Science', slides: 5 }
		],
		searchQuery: ''
	},
	computed: {
        // A computed property that holds only those lessons that match the searchQuery.
        filteredResults: function () {
            var lessons_array = this.lessons,
                searchQuery = this.searchQuery;

            if(!searchQuery){
                return lessons_array;
            }

            searchQuery = searchQuery.trim().toLowerCase();

            lessons_array = lessons_array.filter(function(item){
                if(item.name.toLowerCase().indexOf(searchQuery) !== -1 || item.subject.toLowerCase().indexOf(searchQuery) !== -1){
                    return item;
                }
            })

            // Return an array with the filtered data.
            return lessons_array;
        }
    }
});