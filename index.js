const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

console.log("Hey");

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');

    
    var uncss = require('uncss');

    var files   = ['https://vall.fr/', 'https://vall.fr/publications/', 'https://vall.fr/faq-batiments-industriels-demontables/', 'https://vall.fr/contact/', 'https://vall.fr/acheter-et-louer-batiment-industriel/', 'https://vall.fr/accessoires-pour-batiments-industriels/', 'https://vall.fr/batiments-industriels-demontables/', 'https://vall.fr/batiments-industriels-en-aluminium/', 'https://vall.fr/chapiteaux-industriels/', 'https://vall.fr/salles-sportives-en-acier/', 'https://vall.fr/hangar-pour-avion/', 'https://vall.fr/usine-chapiteaux/', 'https://vall.fr/mission-et-la-vision/', 'https://vall.fr/travaille-avec-nous/', 'https://vall.fr/politiques-de-qualite/', 'https://vall.fr/batiment-stockage-papier-carton/', 'https://vall.fr/chapiteau-industriel-exposition-et-vente/', 'https://vall.fr/tentes-industrielles/', 'https://vall.fr/stockage-de-cereales/', 'https://vall.fr/batiments-industriels-automobile/', 'https://vall.fr/espaces-logistiques/', 'https://vall.fr/stockage-de-boissons/', 'https://vall.fr/stockage-agro-alimentarie/', 'https://vall.fr/secteur-industriel-entrepots-demontables/', 'https://vall.fr/avantages-logistique-et-du-stockage-en-hauteur/', 'https://vall.fr/secteur-construction-economie-circulaire/', 'https://vall.fr/category/chapiteaux-industriels/', 'https://vall.fr/creer/', 'https://vall.fr/politique-de-confidentialite/', 'https://vall.fr/charte-des-cookies/', 'https://vall.fr/architecture-du-site/', 'https://vall.fr/asisa-borges-vall-atteint-finale-coupe-europe-tennis-table/', 'https://vall.fr/airspace-hangars-demontables-pour-avions/', 'https://vall.fr/le-batiment-industriel-demontable-le-plus-solide-du-marche/', 'https://vall.fr/batiments-temporaires-operationnels-temps-record/'],
        options = {
            banner       : false,
            csspath      : '../css/',
            htmlroot     : 'public',
            ignore       : ['#added_at_runtime', /test\-[0-9]+/],
            ignoreSheets : [/fonts.googleapis/],
            inject       : function(window) { window.document.querySelector('html').classList.add('no-csscalc', 'csscalc'); },
            jsdom        : {
                userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)',
            },
            media        : ['(min-width: 700px) handheld and (orientation: landscape)'],
            raw          : 'h1 { color: green }',
            report       : false,
            strictSSL    : true,
            stylesheets  : ['/css/bootstrap.min.css'],
            timeout      : 1000,
            uncssrc      : '.uncssrc',
            userAgent    : 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X)',
        };

    /* Look Ma, no options! */
    uncss(files, function (error, output) {
        console.log(output);

        const fs = require('fs')

        const content = output
    
        try {
        const data = fs.writeFileSync('test.css', content)
        console.error("Finito")
        } catch (err) {
        console.error("---- FALLO ----")
        console.error(err)
        }
    });




});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
