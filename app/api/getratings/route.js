// 1. Import area

// 2. Defination area
async function POST(req){

    const { city, mobile } = await req.json();
                       //object.property.property 
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('searchReferer')
// every function return something
        // Object.method(actualArgument)
    return Response.json({
                            msg1:"Hello " + city,
                            msg2:`Phone Number ${mobile}`,
                            msg3: `Hello ${query}`,
                        });
}
// 3. Export Area
// There are two types export

// 3.1 Default export

// 3.2 Named Export
               //{KEY:VALUE}
                //{P:V}
module.exports = { POST:POST }