const Course = require('../models/Course');

class SiteController {
    // [GET] /home
    // index(req, res) {
    //     res.render('home')
    // }

    // [GET] /home
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();
            res.render('home', { courses });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
