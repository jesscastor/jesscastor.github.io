
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

function getRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length;
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                let ran = getRandomInteger(0, listSize);
                let post = json.data.children[ran].data;

                let subreddit = post.subreddit;
                let author = post.author;
                let title = post.title;
                let upVotes = post.ups;

                let message = "<b>Subreddit </b>: " + subreddit + 
                " <b>Author</b>:" + author + " <b>Title</b>:" + 
                title + " <b>Up votes</b>: " + upVotes;                
            
                let select = document.getElementById("redditList");
                select.innerHTML += "<li>" + message + "</li>";

                let addToChart = {'label':author,y:upVotes}; // Gave this. This needs to be added to the 'chartValues'
                chartValues.push(addToChart);
            }
        })
        .then(values => console.log(chartValues));
        chart.render(); 
};

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints: chartValues// WHAT GOES HERE???
            }
        ]
    });
    
    chart.render();
}

window.onload = makeChart();