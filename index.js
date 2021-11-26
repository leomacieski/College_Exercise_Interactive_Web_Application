const   express = require('express'),
        fs = require('fs'),
        http = require('http'),
        path = require('path'),
        xml2js = require('xml2js'),
        xmlParse = require('xslt-processor').xmlParse,
        xsltProcess = require('xslt-processor').xsltProcess;

const   router = express();
        server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'views')));

router.get('/', function(req, res ){

    res.writeHead(200, {'content-Type' : 'text/html'});

    let xml = fs.readFileSync('PaddyCafe.xml', 'utf8'),
        xsl = fs.readFileSync('PaddyCafe.xsl', 'utf8');

    console.log(xml);
    console.log(xsl);

    let doc = xmlParse(xml),
        stylesheet = xmlParse(xml);

    let result = xsltProcess(doc, stylesheet);

    console.log(result);

    res.end(result.toString());

})

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    const addr = server.address();
    console.log('Server listening at ', addr.address + ':' + addr.port)
})