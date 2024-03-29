import axios from "axios";

const api = axios.create({
baseURL: "https://api.themoviedb.org/3/",
params: {
    api_key : "02e397925544945417ef5e987ea4c268",
    // language : "en-US"
    language : "ko-KR"
}
});



export const moviesAPI ={
nowPlaying: () => api.get("movie/now_playing"),
upcoming : () => api.get("movie/upcoming"),
topRated: () => api.get("movie/top_rated"),
popular: () => api.get("movie/popular"),
latest : ()=> api.get("movie/latest"),
movieDetail: id => api.get(`movie/${id}`,{
    params: {
        append_to_response: "videos"
    }
}),
search : term => api.get("search/movie", {
    params: {
        query: term
    }
})

}

export const tvApi = {
topRated: () => api.get("tv/top_rated"),
popular: () => api.get("tv/popular"),
airingToday: ()=> api.get("tv/airing_today"),
showDetail: id => api.get(`tv/${id}`,{
    params: {
        append_to_response: "videos"
    }
}),
search : term => api.get("search/tv", {
    params: {
        query: term
    }
})
}
;