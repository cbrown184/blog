document.addEventListener("DOMContentLoaded", function() {
    const articles = document.querySelectorAll("article");
    
    document.body.addEventListener("click", function(e) {
        if (e.target.classList.contains("tag")) {
            e.preventDefault();
            let tag = e.target.innerText;
            articles.forEach(article => {
                let tags = Array.from(article.querySelectorAll(".tag")).map(tag => tag.innerText);
                if (tags.includes(tag)) {
                    article.style.display = "block";
                } else {
                    article.style.display = "none";
                }
            });
        }
    });
});

