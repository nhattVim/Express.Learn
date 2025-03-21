const Course = require('../models/Course');

class SiteController {
    // [GET] /home
    // index(req, res) {
    //     res.render('home')
    // }

    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
        } catch (err) {
            console.error(err); // log lỗi để debug
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
