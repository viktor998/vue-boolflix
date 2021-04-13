// API_KEY = 6e29a3130ae055f9d91902afdf5cc018


var app = new Vue({
    el: '#root',
    data:{
        clicked: false,
        search: '',
        searchFilterMovies:[],
        searchFilterTv:[],
        popularMovies: [],
        popularTvShows:[],
        inputSearch: false,
    },
    mounted(){
        
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6e29a3130ae055f9d91902afdf5cc018&language=it')
        .then((response) =>{
            this.popularMovies = response.data.results
            console.log(this.popularMovies)  
            
        });
        
        axios.get('https://api.themoviedb.org/3/tv/popular?api_key=6e29a3130ae055f9d91902afdf5cc018&language=it')
        .then((response) =>{
            this.popularTvShows = response.data.results
            
        })

    },
    methods:{
        searchInDb: function(){
            this.clicked = true;
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=6e29a3130ae055f9d91902afdf5cc018&language=it&query='+this.search)
            .then((response) =>{
                this.searchFilterMovies = response.data.results
                
            })
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=6e29a3130ae055f9d91902afdf5cc018&language=it&query='+this.search)
            .then((response) =>{
                this.searchFilterTv = response.data.results
                
            })
            this.inputSearch = false;
        },
        deleteDb: function(){
            this.clicked = false;
            this.searchFilterMovies = ''
            this.searchFilterTv = ''
        },
        dateRelease: function(movieDate){
            
            let nDate = new Date(movieDate);
            let year = nDate.getFullYear();
            return year
        },
        changeInput: function(){
            
            this.inputSearch = !this.inputSearch
        }
    }
})