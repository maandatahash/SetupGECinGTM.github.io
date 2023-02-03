let Urls = [];
let Names = [];

function displayUrls(){
    var res = document.getElementById('url');
    res.value = "";

    Urls.forEach((value, index) => {
        res.value += Names[index] + " : ";
        res.value += value;
        res.value += "\n\n";
    })
}

function urlGenerate(){
    var subdomain = document.getElementById('subdomain').value ;
    var actionId = document.getElementById('actionId').value ;
    var conversionId = document.getElementById('conversionId').value ;
    var customerId = document.getElementById('customerId').value ;
    var tagName = document.getElementById('tagName').value ;

    if(subdomain == ''){
        alert('Please enter the subdomain !');
        return ;
    }

    if(tagName == ''){
        alert('Please enter the Tag Name !');
        return ;
    }

    if(actionId == ''){
        alert('Please enter the action Id !');
        return ;
    }

    if(conversionId == ''){
        alert('Please enter the conversion Id !');
        return ;
    }

    var url = 'https://' + subdomain + '/gectr?action_id=' + actionId + '&conversion_id=' + conversionId + '&order_id={{Dh - Gads EventID}}&email={{Dh - email}}&first_name={{Dh - First name}}&last_name={{Dh - Last Name}}&phone_number={{Dh - phone number}}&user_agent={{Dh - User Agent}}&ts={{Dh-Timestamp}}' ;

    if(document.getElementById('custIdCheck').checked === true && customerId != ''){
        url += '&customer_id=' + customerId;
    }

    
    console.log(url);

    Urls.push(url);
    Names.push(tagName);

    displayUrls();

    
    document.getElementById('actionId').value = '';
    document.getElementById('conversionId').value = '';
    document.getElementById('customerId').value = '';
    document.getElementById('tagName').value = '';
}



function jsonGenerate(){
    let output = {
        "exportFormatVersion": 2,
        "exportTime": "2023-01-30 12:44:00",
        "containerVersion": {
            "path": "accounts/6070727235/containers/101305717/versions/0",
            "accountId": "6070727235",
            "containerId": "101305717",
            "containerVersionId": "0",
            "container": {
                "path": "accounts/6070727235/containers/101305717",
                "accountId": "6070727235",
                "containerId": "101305717",
                "name": "www.Dgfd.com",
                "publicId": "GTM-5FSHMX4",
                "usageContext": [
                    "WEB"
                ],
                "fingerprint": "1675081217807",
                "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/6070727235/containers/101305717/workspaces?apiLink=container",
                "features": {
                    "supportUserPermissions": true,
                    "supportEnvironments": true,
                    "supportWorkspaces": true,
                    "supportGtagConfigs": false,
                    "supportBuiltInVariables": true,
                    "supportClients": false,
                    "supportFolders": true,
                    "supportTags": true,
                    "supportTemplates": true,
                    "supportTriggers": true,
                    "supportVariables": true,
                    "supportVersions": true,
                    "supportZones": true
                },
                "tagIds": [
                    "GTM-5FSHMX4"
                ]
            },
            "tag": [
                
            ],
            "variable": [
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "3",
                    "name": "Dh-Timestamp",
                    "type": "jsm",
                    "parameter": [
                        {
                            "type": "TEMPLATE",
                            "key": "javascript",
                            "value": "function() {\n   var currentTimeInSeconds=Math.floor(Date.now()/1000);\n    return currentTimeInSeconds;\n}"
                        }
                    ],
                    "fingerprint": "1675081274067",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "4",
                    "name": "Dh - First name",
                    "type": "k",
                    "parameter": [
                        {
                            "type": "BOOLEAN",
                            "key": "decodeCookie",
                            "value": "false"
                        },
                        {
                            "type": "TEMPLATE",
                            "key": "name",
                            "value": "th_capi_fn"
                        }
                    ],
                    "fingerprint": "1675081274062",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "6",
                    "name": "Dh - User Agent",
                    "type": "jsm",
                    "parameter": [
                        {
                            "type": "TEMPLATE",
                            "key": "javascript",
                            "value": "function () {return  navigator.userAgent;}"
                        }
                    ],
                    "fingerprint": "1675081274067",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "7",
                    "name": "Event_Id",
                    "type": "cvt_101305717_5",
                    "parameter": [
                        {
                            "type": "BOOLEAN",
                            "key": "useCustomEventCounter",
                            "value": "false"
                        }
                    ],
                    "fingerprint": "1675081274065",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "8",
                    "name": "Dh - phone number",
                    "type": "k",
                    "parameter": [
                        {
                            "type": "BOOLEAN",
                            "key": "decodeCookie",
                            "value": "false"
                        },
                        {
                            "type": "TEMPLATE",
                            "key": "name",
                            "value": "th_capi_ph"
                        }
                    ],
                    "fingerprint": "1675081274066",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "9",
                    "name": "Dh - email",
                    "type": "k",
                    "parameter": [
                        {
                            "type": "BOOLEAN",
                            "key": "decodeCookie",
                            "value": "false"
                        },
                        {
                            "type": "TEMPLATE",
                            "key": "name",
                            "value": "th_capi_em"
                        }
                    ],
                    "fingerprint": "1675081274066",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "10",
                    "name": "Dh - Gads EventID",
                    "type": "jsm",
                    "parameter": [
                        {
                            "type": "TEMPLATE",
                            "key": "javascript",
                            "value": "function()\n{\n    var Eid={{Event_Id}};\n  \nreturn Eid.toString();\n}"
                        }
                    ],
                    "fingerprint": "1675081274068",
                    "formatValue": {}
                },
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "variableId": "11",
                    "name": "Dh - Last Name",
                    "type": "k",
                    "parameter": [
                        {
                            "type": "BOOLEAN",
                            "key": "decodeCookie",
                            "value": "false"
                        },
                        {
                            "type": "TEMPLATE",
                            "key": "name",
                            "value": "th_capi_ln"
                        }
                    ],
                    "fingerprint": "1675081274067",
                    "formatValue": {}
                }
            ],
            "fingerprint": "1675082640330",
            "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/6070727235/containers/101305717/versions/0?apiLink=version",
            "customTemplate": [
                {
                    "accountId": "6070727235",
                    "containerId": "101305717",
                    "templateId": "5",
                    "name": "Event Id",
                    "fingerprint": "1675081274064",
                    "templateData": "___TERMS_OF_SERVICE___\n\nBy creating or modifying this file you agree to Google Tag Manager's Community\nTemplate Gallery Developer Terms of Service available at\nhttps://developers.google.com/tag-manager/gallery-tos (or such other URL as\nGoogle may provide), as modified from time to time.\n\n\n___INFO___\n\n{\n  \"type\": \"MACRO\",\n  \"id\": \"cvt_temp_public_id\",\n  \"version\": 1,\n  \"securityGroups\": [],\n  \"displayName\": \"Event Id\",\n  \"description\": \"generates a unique event id for all gtm / dataLayer events - based on a random id for every page.\",\n  \"containerContexts\": [\n    \"WEB\"\n  ],\n  \"brand\": {\n    \"displayName\": \"mbaersch\",\n    \"id\": \"github.com_mbaersch\"\n  }\n}\n\n\n___TEMPLATE_PARAMETERS___\n\n[\n  {\n    \"type\": \"CHECKBOX\",\n    \"name\": \"useCustomEventCounter\",\n    \"checkboxText\": \"Custom Event Counter\",\n    \"simpleValueType\": true,\n    \"help\": \"The result will use gtm.uniqueEventId from the dataLayer to differentiate separate events on the same page. If that does not fit your triggering plan, you can use different event id variables for every event type and add your own counter. \\n\\nExample: separate event id for a purchase using the transaction id as unique counter.\"\n  },\n  {\n    \"type\": \"TEXT\",\n    \"name\": \"customEventCounter\",\n    \"displayName\": \"\",\n    \"simpleValueType\": true,\n    \"valueValidators\": [\n      {\n        \"type\": \"NON_EMPTY\"\n      }\n    ],\n    \"enablingConditions\": [\n      {\n        \"paramName\": \"useCustomEventCounter\",\n        \"paramValue\": true,\n        \"type\": \"EQUALS\"\n      }\n    ]\n  }\n]\n\n\n___SANDBOXED_JS_FOR_WEB_TEMPLATE___\n\nconst copyFromDataLayer = require('copyFromDataLayer');\nconst setInWindow = require('setInWindow');\nconst copyFromWindow = require('copyFromWindow');\nconst getTimestampMillis = require('getTimestampMillis');\nconst generateRandom = require('generateRandom');\nvar eventId = copyFromWindow('_randomPageId');\nif (!eventId) {\n  eventId = getTimestampMillis() + '.' + generateRandom(100000, 999999);\n  setInWindow('_randomPageId', eventId, false);\n}\n\nvar uniqueEventCounter = (data.useCustomEventCounter === true) ? data.customEventCounter : copyFromDataLayer('gtm.uniqueEventId') || '0';\n\nreturn eventId + \".\" + uniqueEventCounter;\n\n\n___WEB_PERMISSIONS___\n\n[\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"access_globals\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"keys\",\n          \"value\": {\n            \"type\": 2,\n            \"listItem\": [\n              {\n                \"type\": 3,\n                \"mapKey\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"key\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"read\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"write\"\n                  },\n                  {\n                    \"type\": 1,\n                    \"string\": \"execute\"\n                  }\n                ],\n                \"mapValue\": [\n                  {\n                    \"type\": 1,\n                    \"string\": \"_randomPageId\"\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": true\n                  },\n                  {\n                    \"type\": 8,\n                    \"boolean\": false\n                  }\n                ]\n              }\n            ]\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  },\n  {\n    \"instance\": {\n      \"key\": {\n        \"publicId\": \"read_data_layer\",\n        \"versionId\": \"1\"\n      },\n      \"param\": [\n        {\n          \"key\": \"keyPatterns\",\n          \"value\": {\n            \"type\": 2,\n            \"listItem\": [\n              {\n                \"type\": 1,\n                \"string\": \"gtm.uniqueEventId\"\n              }\n            ]\n          }\n        }\n      ]\n    },\n    \"clientAnnotations\": {\n      \"isEditedByUser\": true\n    },\n    \"isRequired\": true\n  }\n]\n\n\n___TESTS___\n\nscenarios: []\n\n\n___NOTES___\n\nCreated on 22.4.2022, 10:03:29\n\n\n",
                    "galleryReference": {
                        "host": "github.com",
                        "owner": "mbaersch",
                        "repository": "event-id",
                        "version": "1b513f75db715689cc7da724c495c311d29b3354",
                        "signature": "e6728721e7ae069acbbd6924487fab591ffa3a39727fcc76ec7840329e46928e"
                    }
                }
            ]
        }
    }

    Urls.forEach((value, index) => {
        output.containerVersion.tag.push({
            "accountId": "6070727235",
            "containerId": "101305717",
            "tagId": Number("12") + index,
            "name": Names[index],
            "type": "img",
            "parameter": [
                {
                    "type": "BOOLEAN",
                    "key": "useCacheBuster",
                    "value": "true"
                },
                {
                    "type": "TEMPLATE",
                    "key": "url",
                    "value": value
                },
                {
                    "type": "TEMPLATE",
                    "key": "cacheBusterQueryParam",
                    "value": "gtmcb"
                }
            ],
            "fingerprint": "1675082612046",
            "tagFiringOption": "ONCE_PER_EVENT",
            "monitoringMetadata": {
                "type": "MAP"
            },
            "consentSettings": {
                "consentStatus": "NOT_SET"
            }
        })
    })

    document.getElementById('json').value = JSON.stringify(output,undefined,4) ;
}

function myFunction(){
    console.log(document.getElementById('custIdCheck').checked);
    if(document.getElementById('custIdCheck').checked === false){
        document.getElementById('custId').className = "vanish";
    } else {
        document.getElementById('custId').className = "mb-3";
    }
}

function copyText() {
    var copyValue = document.getElementById("json");
    //console.log(copyValue.value);
    copyValue.select();
    copyValue.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyValue.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied"
}

function saveTextAsFile(textToWrite, fileNameToSaveAs){
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function removeTag(){
    var remTag = document.getElementById('remTag').value ;
    if(Names.includes(remTag)){
        var index = Names.indexOf(remTag);
        Names.splice(index,1);
        Urls.splice(index,1);
    } else {
        alert('The given Tag does not exist');
    }

    displayUrls();

    if(document.getElementById('json').value != '') jsonGenerate();
}