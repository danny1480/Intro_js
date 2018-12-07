let myBlog = {
    title: ' Intro to Programming',
    body: ' Javascript ',
    author: ' Daiyan Khan ',
    views: 200,
    comments: [ 'author', 'body', 'time']

}

let islive = 'true';
Boolean(islive);

let getBlogSummary = function (myBlog) {
    return ` The name of myblog is ${myBlog.title} which summarizes ${myBlog.body}, written by ${myBlog.author} with ${myBlog.views} views and comments by ${myBlog.comments} and is live ? - ${islive}.`;
};

console.log(getBlogSummary(myBlog));