async function tempo(request, response){
    const dynamicDate = new Date();
    //const api = await fetch("teste");

    response.setHeader('Cache-Control', 's-maxage=10, stable-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString()
        //api: api.toString()
    });
}

export default tempo;