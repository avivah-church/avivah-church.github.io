document.addEventListener("DOMContentLoaded", function() {


    var container = document.querySelector('#youtube-container');
    
    axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            key: 'AIzaSyDzK52nIJGBVEsBFp6QuwI6Ue4ZNyY09co',
            channelId: 'UCw21HECH5iQQlXXa0MutDsA',
            order: 'date',
            part: 'snippet,id',
            type: 'video'   
        }
    }).then(function (response) {

        response.data.items.map(function (item) {

            var el = document.createElement('a')
            el.setAttribute('class', 'youtube-item')
            el.setAttribute('href', '#youtube-iframe');
            el.style.backgroundImage = 'url("https://img.youtube.com/vi/' + item.id.videoId + '/hqdefault.jpg")'
            el.dataset.videoId = item.id.videoId
            el.innerHTML = '<h4>' + item.snippet.title + '</h4>';

            el.addEventListener('click', changeIframeVideo);

            var col = document.createElement('div')
            col.setAttribute('class', 'col-xs-12 col-sm-4 col-md-3');

            col.appendChild(el)

            container.appendChild(col)
        })

        response.data.items.length && changeIframeVideo(response.data.items[0].id.videoId)
    })
})


function changeIframeVideo(){
    
    var iframe = document.querySelector('#youtube-iframe');

    iframe.src = 'https://www.youtube.com/embed/' + this.dataset.videoId + '?';

}