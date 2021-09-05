
function getStock(){
    var requestUrl = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apiKey=QCklDmiYVcogYdakPNSCT0o5eDjpTpoQ'
    fetch(requestUrl)
    .then(function(response){
        return response.json();
    })

.then(function(data){
    console.log(data);


    
})}

refresh.addEventListener('click', getStock());