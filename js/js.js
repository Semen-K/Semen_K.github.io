window.onload = function(){	
	document.querySelector('#click_my').onclick = function() {
	 	check(respons);
	 };
};		
  	function check(callback) {
  		add.innerHTML = " "; 
  		let	urlic = ["https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4",
        "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4",
        "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=top&apiKey=43c38bd86c664ebd8598b439298daee4"];
      
        urlic.forEach(function(item, i, urlic) {
            if(document.getElementById("check"+i).checked) {
               	callback(item, addArticles);
            }
        });        
    };

 	function addArticles(obj) {
 			let objJS = JSON.parse(obj);
 			let x = objJS.articles;
 			let z;
 			for(z=0; z < x.length; z++){
	 			let newTr = document.createElement('tr');
       			newTr.innerHTML = '<td colspan="2"><img src="' + x[z].urlToImage + '"> <h1>' + x[z].title + '</h1> <p>' + x[z].description + 
				 '</p><p>'
				+ x[z].author +'</br>' + x[z].publishedAt + '</p><a href="'
				+ x[z].url +'">Read more...</a></td>';
				add.appendChild(newTr);	
		}
	};

	function respons(url, callback) {
		console.log(url + " входной урл");
		let request = new XMLHttpRequest();
		request.open('GEt', url);
		request.send();
		request.onreadystatechange = function() {
			if(request.readyState === 4 && request.status === 200) {
				let textJSON = request.responseText;
				callback(textJSON);
			} 
		}
	};
