class NewsController {
    // [GET] /news
    index(req, res) {
        return res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL');
    }
}

module.exports = new NewsController();
