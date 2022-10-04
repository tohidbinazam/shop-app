
// Make slug from data
const makeSlug = (data) => {

    const lowercase = data.toLowerCase().trim()
    const slug = lowercase.split(' ').join('-')

    return slug
}

export default makeSlug