class SiteController {
    // [GET] /news
    index(req, res) {
        return res.render('home');
    }

    // [GET] /search
    search(req, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
