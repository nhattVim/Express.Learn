const Handlebars = require('handlebars')

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column && ['desc', 'asc'].includes(sort.type) ? sort.type : "default";

        const icons = {
            default: 'ri-arrow-up-down-line',
            asc: 'ri-sort-asc',
            desc: 'ri-sort-desc'
        }

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        }

        const icon = icons[sortType]
        const type = types[sortType]

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
        const output = `<a href="${href}" style="text-decoration: none;">
                            <i class="${icon}"></i>
                        </a>`

        return new Handlebars.SafeString(output)
    }
}