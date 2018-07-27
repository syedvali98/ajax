let movieName;
let movieId;
let movieYear;

$(document).ready(() => {
    $('#response').hide();
    $('#reButton').hide();
    $( ".searchButton" ).click(function() {
    movieName = $( "#movie-title" ).val();
    movieId = $('#movie-id').val();
    movieYear = $('#movie-year').val();    
    $('.searchEngine').hide();    
    getsearchresult();  
        event.preventDefault();
});
    
    
});


let getsearchresult = () => {
    
    let sideName = (`t=`)+movieName + ('&plot=full&apikey=a8f1f489');
    let sideName1 = (`i=`)+ movieId + ('&plot=full&apikey=a8f1f489');
    $.ajax({
    type: 'GET',
    dataType: 'json',
    async: true,
    url: 'http://www.omdbapi.com/?'+sideName,
          
        
        success: (response) => {
           // let urls = 'http://www.omdbapi.com/?t=' + sideName;
           // console.log(response.Title);
          //  console.log(urls)
            $("#poster").attr("src", response.Poster);
            $('#card-title').append(`Title : `+response.Title);
            $('#year').append(`Year : `+response.Year);
            $('#rated').append(`Rated : `+response.Rated);
            $('#released').append(`Released : `+response.Released);
            $('#runtime').append(`Runtime : `+response.Runtime);
            $('#genre').append(`Genre : `+response.Genre);
            $('#director').append(`Director : `+response.Director);
            $('#writer').append(`Writer : `+response.Writer);
            $('#actors').append(`Actors : `+response.Actors);
            $('#plot').append(`Plot :`+response.Plot);
            $('#language').append(`Language : `+response.Language);
            $('#country').append(`Country : `+response.Country);
            $('#awards').append(`Awards : `+response.Awards);
            $('#response').show();
            $('#reButton').show();
            $("#poster").on('error', function(){
            alert(`poster not found`)    
            $("#poster").attr("src", `https://png.icons8.com/metro/1600/imdb.png`);
            });
        
        },
        
        error: (err)=>{
            
            console.log(err.responseJSON.error.message);
             alert(err.responseJSON.error.message);
        }
        
        
    });
    
}
