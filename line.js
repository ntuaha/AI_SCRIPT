function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


    function makeRequest(url) {
        var httpRequest;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
            if (httpRequest.overrideMimeType) {
                httpRequest.overrideMimeType('application/json');
            }
        }
        else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = function() { alertContents(httpRequest); };
        httpRequest.open('GET', url, true);
        httpRequest.send('');

    }
    function alertContents(httpRequest) {
        if (httpRequest.readyState == 4) {
            if (httpRequest.status == 200) {
                //alert(httpRequest.responseText);
                window.location.href = decodeURIComponent(getUrlVars()["target"]);
            } else {
                //alert('There was a problem with the request.');
            }
        }
    }

    var script = document.createElement('script');
    script.src = "http://jsonp.guffa.com/Proxy.ashx?url="+decodeURIComponent(getUrlVars()["info"]);
    document.getElementsByTagName('head')[0].appendChild(script);

    window.onload = function(){
      window.location.href = decodeURIComponent(getUrlVars()["target"]);
      //makeRequest();      
      console.log(getUrlVars());
    }