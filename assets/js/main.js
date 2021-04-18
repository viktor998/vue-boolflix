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
        showMoviesOrTV: true,
        mute: 'mute=1',
        keys: [
            'https://ia802806.us.archive.org/10/items/marvelstudiosavengersendgameofficialtrailer/Marvel%20Studios%27%20Avengers-%20Endgame%20-%20Official%20Trailer.mp4',
            'https://ia903003.us.archive.org/23/items/podcast_marvel-deutschland_captain-america-the-first-ave_1000168356931/podcast_marvel-deutschland_captain-america-the-first-ave_1000168356931.m4v',
            'https://ia802908.us.archive.org/22/items/trailer1_201701/trailer1.mp4',
            'https://ia801002.us.archive.org/32/items/podcast_marvel-deutschland_thor-trailer-2011-ipodi_1000168356941/podcast_marvel-deutschland_thor-trailer-2011-ipodi_1000168356941.m4v'
        ],
        keysTV: ['https://ia800909.us.archive.org/28/items/4LuciferSeason4TeaserHDNetflixYouTube/%284%29%20Lucifer%20-%20Season%204%20Teaser%20%5BHD%5D%20-%20Netflix%20-%20YouTube.mp4',
        'https://ia601807.us.archive.org/35/items/wanda-vision-official-trailer-disney/WandaVision%20_%20Official%20Trailer%20_%20Disney%2B.mp4',
        'https://ia601205.us.archive.org/35/items/Httparrowseason5fullepisodes.com/Arrow%20Season%205%20Trailer%20%28Comic-Con%29.mp4',
        'https://ia601807.us.archive.org/35/items/wanda-vision-official-trailer-disney/WandaVision%20_%20Official%20Trailer%20_%20Disney%2B.mp4'
        ],
        indexVideo: '',
        colorBind: '',
        colorBindTv: '',
        display: false,

    },
    mounted(){
        this.indexVideo= Math.floor(Math.random() * (this.keys.length - 0)) + 0
        
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6e29a3130ae055f9d91902afdf5cc018&language=it')
        .then((response) =>{
            this.popularMovies = response.data.results
            
            
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
                console.log(this.searchFilterMovies)
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
        },

    }
})

// $('.yt_player_iframe').each(        .postMessage('{"event":"command","func":"stopVideo","args":""}', '*')