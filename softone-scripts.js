function createVariantParameters() {
    var str = 'select WEBPAGE,CCCWEBKEY from company where company = ' + X.SYS.COMPANY;
    var COMPANY = X.GETSQLDATASET(str, null);

    var JsonBody = '{"data": { "type": "variant-parameters", "attributes": { "name": "#name", "display_type": "select" }}}';
    JsonBody = JsonBody.replace("#name", CDIM.NAME);

    JsonBody = JSON.stringify(JsonBody);
    JsonBody = JSON.parse(JsonBody);

    var url = '#web/api/v2/variant-parameters';
    url = url.replace("#web", COMPANY.WEBPAGE);
    var HttpClient = new ActiveXObject("Microsoft.XMLHTTP");
    HttpClient.open("POST", url, false);
    HttpClient.setRequestHeader("X-CloudCart-ApiKey", COMPANY.CCCWEBKEY);
    HttpClient.setRequestHeader("Content-Type", 'application/vnd.api+json');
    HttpClient.setRequestHeader("Accept-Encoding", 'gzip');
    HttpClient.setRequestHeader("Accept-Encoding", 'deflate');
    HttpClient.setRequestHeader("Accept-Encoding", 'br');
    HttpClient.send(JsonBody);

    var RespObj = HttpClient.responseText;
    var jsResp = JSON.parse(RespObj);
    var id = jsResp["data"]["id"];
    CDIM.CCCID = id;
}

function updateVariantParameters() {
    var str = 'select WEBPAGE,CCCWEBKEY from company where company = ' + X.SYS.COMPANY;
    var COMPANY = X.GETSQLDATASET(str, null);

    var JsonBody = '{"data": { "type": "variant-parameters", "id":"#id", "attributes": { "name": "#name", "display_type": "select" }}}';
    JsonBody = JsonBody.replace("#name", CDIM.NAME);
    JsonBody = JsonBody.replace("#id", CDIM.CCCID);

    JsonBody = JSON.stringify(JsonBody);
    JsonBody = JSON.parse(JsonBody);

    var url = '#web/api/v2/variant-parameters/#id';
    url = url.replace("#web", COMPANY.WEBPAGE);
    url = url.replace("#id", CDIM.CCCID);
    var HttpClient = new ActiveXObject("Microsoft.XMLHTTP");
    HttpClient.open("PATCH", url, false);
    HttpClient.setRequestHeader("X-CloudCart-ApiKey", COMPANY.CCCWEBKEY);
    HttpClient.setRequestHeader("Content-Type", 'application/vnd.api+json');
    HttpClient.setRequestHeader("Accept-Encoding", 'gzip');
    HttpClient.setRequestHeader("Accept-Encoding", 'deflate');
    HttpClient.setRequestHeader("Accept-Encoding", 'br');
    HttpClient.send(JsonBody);

    var RespObj = HttpClient.responseText;
}

function createVariantOption() {
    var str = 'select WEBPAGE,CCCWEBKEY from company where company = ' + X.SYS.COMPANY;
    var COMPANY = X.GETSQLDATASET(str, null);

    var JsonBody = '{"data": { "type": "variant-options", "attributes": { "name": "#name" }, "relationships": { "parameter": { "data": { "type": "variant-parameters", "id": "#id" }}}}}';
    JsonBody = JsonBody.replace("#name", CDIMLINES.NAME);
    JsonBody = JsonBody.replace("#id", CDIM.CCCID);

    JsonBody = JSON.stringify(JsonBody);
    JsonBody = JSON.parse(JsonBody);
    var url = '#web/api/v2/variant-options';
    url = url.replace("#web", COMPANY.WEBPAGE);
    var HttpClient = new ActiveXObject("Microsoft.XMLHTTP");
    HttpClient.open("POST", url, false);
    HttpClient.setRequestHeader("X-CloudCart-ApiKey", COMPANY.CCCWEBKEY);
    HttpClient.setRequestHeader("Content-Type", 'application/vnd.api+json');
    HttpClient.setRequestHeader("Accept-Encoding", 'gzip');
    HttpClient.setRequestHeader("Accept-Encoding", 'deflate');
    HttpClient.setRequestHeader("Accept-Encoding", 'br');
    HttpClient.send(JsonBody);

    var ResObj = HttpClient.responseText;
    var JsResp = JSON.parse(ResObj);
    CDIMLINES.CCCCCID = JsResp["data"]["id"];
}

function updateVariantOption() {
    var str = 'select WEBPAGE,CCCWEBKEY from company where company = ' + X.SYS.COMPANY;
    var COMPANY = X.GETSQLDATASET(str, null);

    var JsBody = '{"data": { "type": "variant-options", "id": "#id", "attributes": { "name": "#name" }}}';
    JsBody = JsBody.replace("#name", CDIMLINES.NAME);
    JsBody = JsBody.replace("#id", CDIMLINES.CCCCCID);

    JsBody = JSON.stringify(JsBody);
    JsBody = JSON.parse(JsBody);
    var url = '#web/api/v2/variant-options/#id';
    url = url.replace("#web", COMPANY.WEBPAGE);
    url = url.replace("#id", CDIMLINES.CCCCCID);
    var HttpClient = new ActiveXObject("Microsoft.XMLHTTP");
    HttpClient.open("PATCH", url, false);
    HttpClient.setRequestHeader("X-CloudCart-ApiKey", COMPANY.CCCWEBKEY);
    HttpClient.setRequestHeader("Content-Type", 'application/vnd.api+json');
    HttpClient.setRequestHeader("Accept-Encoding", 'gzip');
    HttpClient.setRequestHeader("Accept-Encoding", 'deflate');
    HttpClient.setRequestHeader("Accept-Encoding", 'br');
    HttpClient.send(JsBody);

    var ResObj = HttpClient.responseText;
    var JsResp = JSON.parse(ResObj);
}

function deleteVariantOption() {
    var str = 'select WEBPAGE,CCCWEBKEY from company where company = ' + X.SYS.COMPANY;
    var COMPANY = X.GETSQLDATASET(str, null);

    var JsonBody = '';

    JsonBody = JSON.stringify(JsonBody);
    JsonBody = JSON.parse(JsonBody);
    var url = '#web/api/v2/variant-options/#id';
    url = url.replace("#web", COMPANY.WEBPAGE);
    url = url.replace("#id", CDIMLINES.CCCCCID);
    var HttpClient = new ActiveXObject("Microsoft.XMLHTTP");

