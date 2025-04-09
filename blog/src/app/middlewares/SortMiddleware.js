module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        column: 'default',
        type: 'default'
    }

    if (req.query.hasOwnProperty('_sort')) {
        // res.locals._sort.enabled = true;
        // res.locals._sort.column = req.query.column || 'default';
        // res.locals._sort.type = req.query.type || 'default';

        Object.assign(res.locals._sort, {
            enabled: true,
            column: req.query.column || 'default',
            type: req.query.type || 'default'
        });
    }

    next();
}