//1. import area


//2. Defination area
async function POST(req) {

    const {company, version} = await req.json();
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('product')

    return Response.json({
        msg1: "Hello " + company,
        msg2: `version ${version}`,
        msg3: `Product ${query}`,
    })

}


// 3. export area
// 3.2 Named export
module.exports = { POST:POST }