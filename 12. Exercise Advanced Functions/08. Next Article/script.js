function getArticleGenerator(articles) {
    return function () {
        const article = articles.shift();
        const element = document.createElement('article');
        element.textContent = article;
        let div = document.getElementById('content');
        if(article != undefined) {
            div.appendChild(element);
        }
    }    
}
