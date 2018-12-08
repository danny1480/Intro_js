//Create a blog post with below details 
// title
// body
// author
// views 
// comments {author , body, date}
// isLive

let post = {
    title: 'my blog',
    body: 'my body ',
    author: 'Mohammad',
    views: 30,
    comments: [{
            author: 'Jason',
            body: 'comment body 1',
            date: 'Today'
        }, {
            author: 'nancy',
            body: 'comment body 2',
            date: 'Yesterday'
        }
    ]   
};

console.log(post);