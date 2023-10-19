// 1. Import Area

// searchParams is a property of url, is used to access and manipulate the query string parameter of a URL

// 2. Defination Area
async function POST(req) {
    // below line will get the data from the query string
    const {postId, id, name, email, body} = await req.json();
    // Url query Parameters
                      // object.property.property
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')

    // Object.method(actualArgument)
    return Response.json({
        msg1: "hi " + postId,
        msg2: `id ${id}`,
        msg3: `name ${name}`,
        msg4: `email ${email}`,
        msg5: `body ${body}`,
        msg6: `I am comming from url query string ${query}`,
    })
}
// 3. Export Area
module.exports = { POST:POST }