
// Make slug from data
const makeSlug = (data) => {

    const slug = data.trim().split(' ').join('-')

    return slug
}

export default makeSlug