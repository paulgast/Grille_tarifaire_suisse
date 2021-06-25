let url = 'https://v6.exchangerate-api.com/v6/07346dc4abcd953f766dee9d/latest/EUR'


let requete = new XMLHttpRequest();
requete.open('GET', url)
requete.responseType = 'json'
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse = requete.response;
            let rate    = reponse.conversion_rates.CHF;

            // Définition des différents prix
            let euroun     = 31.40;
            let eurodeux   = 28.80;
            let eurotrois  = 26.90;
            let euroquatre = 25.80;

            let eurocinq   = 35.10;
            let eurosix   = 30.30;

            let euroneuf   = 36.90;
            let eurodix    = 32.50;

            // Calcul des prix par mois
            let conversionCHFun     = euroun     * rate;
            let conversionCHFdeux   = eurodeux   * rate;
            let conversionCHFtrois  = eurotrois  * rate;
            let conversionCHFquatre = euroquatre * rate;

            let conversionCHFcinq   = eurocinq   * rate;
            let conversionCHFsix    = eurosix    * rate;

            let conversionCHFneuf   = euroneuf   * rate;
            let conversionCHFdix    = eurodix    * rate;
            
            // Affichage du taux du jour
            document.querySelector('#price_label').textContent = rate;
    
            // Affichage des prix par cours (24 mois)
            document.querySelector('#vingtquatreun').textContent           = conversionCHFun.toFixed(2);
            document.querySelector('#vingtquatrequatre').textContent       = conversionCHFun.toFixed(2) * 4;

            document.querySelector('#vingtquatredeux').textContent         = conversionCHFdeux.toFixed(2);
            document.querySelector('#vingtquatrehuit').textContent         = conversionCHFdeux.toFixed(2) * 8;

            document.querySelector('#vingtquatretrois').textContent        = conversionCHFtrois.toFixed(2);
            document.querySelector('#vingtquatredouze').textContent        = conversionCHFtrois.toFixed(2) * 12;

            document.querySelector('#vingtquatrequatrequatre').textContent = conversionCHFquatre.toFixed(2);
            document.querySelector('#vingtquatreseize').textContent        = conversionCHFquatre.toFixed(2) * 16;
        

            // Affichage des prix par cours (12 mois)
            document.querySelector('#douzeun').textContent        = conversionCHFcinq.toFixed(2);
            document.querySelector('#douzeunquatre').textContent  = conversionCHFcinq.toFixed(2) * 4;

            document.querySelector('#douzedeux').textContent      = conversionCHFun.toFixed(2);
            document.querySelector('#douzehuit').textContent      = conversionCHFun.toFixed(2) * 8;

            document.querySelector('#douzetrois').textContent     = conversionCHFsix.toFixed(2);
            document.querySelector('#douzedouze').textContent     = conversionCHFsix.toFixed(2) * 12;

            document.querySelector('#douzequatre').textContent    = conversionCHFdeux.toFixed(2);
            document.querySelector('#douzeseize').textContent     = conversionCHFdeux.toFixed(2) * 16;

            // Affichage des prix par cours (6 mois)
            document.querySelector('#sixun').textContent         = conversionCHFneuf.toFixed(2);
            document.querySelector('#sixunquatre').textContent   = conversionCHFneuf.toFixed(2) * 4;

            document.querySelector('#sixdeux').textContent       = conversionCHFcinq.toFixed(2);
            document.querySelector('#sixhuit').textContent       = conversionCHFcinq.toFixed(2) * 8;

            document.querySelector('#sixtrois').textContent      = conversionCHFdix.toFixed(2);
            document.querySelector('#sixdouze').textContent      = conversionCHFdix.toFixed(2) * 12;

            document.querySelector('#sixquatre').textContent     = conversionCHFun.toFixed(2);
            document.querySelector('#sixseize').textContent      = conversionCHFun.toFixed(2) * 16;
            
        }
        else {
            alert("Un problème est intervenu. Merci de revenir plus tard.");
        }
    }
}
