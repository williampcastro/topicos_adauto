var resitfy = require('restify');

helloWorld = (req, resp, next) => {
    //Definindo o formato da response
    resp.setHeader('Content-Type', 'application/json');
    resp.charSet('UTF-8');
    resp.send("Hello World");
    next();
}

soma = (req, resp, next) => {
    //Definindo o formato da response
    resp.setHeader('Content-Type', 'application/json');
    resp.charSet('UTF-8');
    
    var x = req.body.x;
    var y = req.body.y;
    var soma = x + y;

    resp.send("Soma = " + soma);
    next();
}

var server = resitfy.createServer({
    name: 'Prática 1'
});

server.use(resitfy.plugins.bodyParser());

server.get('/hello', helloWorld);
server.get('/soma', soma);

var port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log("%s rodando", server.name);
})

