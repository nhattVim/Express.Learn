const Course = require('../models/Course');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                res.render('courses/show', { course });
            })
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /courses/store
    store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch();
    }

    // [GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => {
                res.render('courses/edit', { course });
            })
            .catch(next)
    }

    // [PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body).lean()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [DELETE] /course/delete
    delete(req, res, next) {
        Course.delete({ _id: req.params.id }).lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /course/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id }).lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /course/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id }).lean()
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [POST] /course/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } }).lean()
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            case 'restore':
                Course.restore({ _id: { $in: req.body.courseIds } }).lean()
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            case 'deleteForce':
                Course.deleteMany({ _id: { $in: req.body.courseIds } }).lean()
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;

            default:
                res.json({ message: 'Action not found' });
                break;
        }
    }
}

module.exports = new CourseController()
