// 1. Import Area

// 2. Defination Area
async function POST(req){

    const { quesone, questwo } = await req.json();
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('answer')
    
    return Response.json({
                            option1: "Hi " + quesone,
                            option2: `I am answer ${questwo}`,
                            option3: `answer is ${query}`
    })
}

// 3. Export Area
module.exports = { POST:POST }