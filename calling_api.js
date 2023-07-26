const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    console.log('FIRST REQUEST WORKED!!!!');
    const data = JSON.parse(this.responseText);
    const filmUrl = data.results[0].films[0];
    // for (let planet of data.results){
    //     console.log(planet.name)
    // };
    //Second http request
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function(){
        console.log("Second REQUEST WORTKED!!!")
        const filmData = JSON.parse(this.responseText);
        console.log(filmData)
    })
    filmReq.addEventListener('error', function(e){
        console.log('ERROR!!!', e);
    });
    filmReq.open('GET', filmUrl);
    filmReq.send();
});
firstReq.addEventListener('error', () =>{
    console.log('ERROR!!!!');
});
firstReq.open('GET', 'https://swapi.dev/api/planets/?page=2');
firstReq.send();
console.log('Request Sent!');
