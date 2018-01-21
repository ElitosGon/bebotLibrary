/*
Microsoft Translator APIs can be seamlessly integrated into your applications, websites, tools, or other solutions to provide multi-language user experiences. Leveraging industry standards, it can be used on any hardware platform and with any operating system to perform language translation and other language-related operations such as text language detection or text to speech. Click Here for more informaiton about the Microsoft Translator API.
*/
var rp = require('request-promise');

module.exports = function(accessKey__, endPoint__){
    return {
        pathTranslation: '/V2/Http.svc/Translate',
        pathMultiTranslation: '/V2/Http.svc/TranslateArray',
        pathLanguageNames: '/V2/Http.svc/GetLanguageNames',
        pathLanguageForTranslate: '/V2/Http.svc/GetLanguagesForTranslate',
        pathLanguagesForSpeak: '/V2/Http.svc/GetLanguagesForSpeak',
        pathSpeak: '/V2/Http.svc/Speak',
        pathDetect: '/V2/Http.svc/Detect',
        pathMultiDetect: '/V2/Http.svc/DetectArray',
        pathAddTranslation: '/V2/Http.svc/AddTranslation',
        pathAddMultiTranslation: '/V2/Http.svc/AddTranslationArray',
        pathBreakSentences: '/V2/Http.svc/BreakSentences',
        pathAllTraslations: '/V2/Http.svc/GetTranslations',
        pathMultiAllTraslations: '/V2/Http.svc/GetTranslationsArray',
        accessToken: '',
        accessKey: accessKey__,
        endPoint: endPoint__,

        /* Translates a text string from one language to another. */
        translation: function(headers__,parameters__, callback) {
            if (headers__ == null){ headers__ = {'Authorization': this.accessToken, 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'GET', uri: 'https://' + this.endPoint + this.pathTranslation, qs: parameters__, headers: headers__};
            rp(options).then(function (parsedBody) {            
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            }); 
        },

         /* Object headers to translation function */
        translationHeaderHelper: function(accessToken__, accessKey__){
            return {
                'Authorization': "Bearer " + accessToken__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to translation function */
        translationParametersHelper: function(appid__, text__, from__, to__, contentType__, category__){
            return {
                'appid': appid__,
                'text': text__,
                'from': from__,
                'to': to__,
                'contentType': contentType__,
                'category': category__
            }
        },

        /* Description translation service */
        translationDescription: function(){
            return {
                "request": {
                    "path": "https://api.microsofttranslator.com/V2/Http.svc/Translate",
                    "method": "GET",
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Authorization": {
                                "type": "string",
                                "description": "Required if the appid field or Ocp-Apim-Subscription-Key header is not specified. Authorization token: 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "Ocp-Apim-Subscription-Key": {
                                "type": "string",
                                "description": "Subscription key which provides access to this API. Found in your Cognitive Services accounts.",
                                "required": true
                            }
                        }
                    },
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "appid": {
                                "type": "string",
                                "description": "Required. If the Authorization or Ocp-Apim-Subscription-Key header is used, leave the appid field empty else include a string containing 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "text": {
                                "type": "string",
                                "description": "Required. A string representing the text to translate. The size of the text must not exceed 10000 characters.",
                                "required": false
                            },
                            "from": {
                                "type": "string",
                                "description": "Optional. A string representing the language code of the translation text. For example, en for English.",
                                "required": false
                            },
                            "to": {
                                "type": "string",
                                "description": "Required. A string representing the language code to translate the text into.",
                                "required": false
                            },
                            "contentType": {
                                "type": "string",
                                "description": "Optional. The format of the text being translated. The supported formats are text/plain (default) and text/html. Any HTML needs to be a well-formed, complete element.",
                                "required": false
                            },
                            "category": {
                                "type": "string",
                                "description": "Optional. A string containing the category (domain) of the translation. Defaults to 'general'.",
                                "required": false
                            }
                        }
                    }
                },
                "response": {
                    "type": "string",
                }
            }
        },

        /* Use the TranslateArray method to retrieve translations for multiple source texts. */
        multiTranslation: function(body__, headers__, parameters__, callback){
            if (headers__ == null){ headers__ = {'Authorization': this.accessToken, 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'POST', uri: 'https://' + this.endPoint + this.pathMultiTranslation, qs: parameters__, headers: headers__, body: body__};
            rp(options).then(function (parsedBody) {            
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            }); 
        },

        /* Object body to multi translation function */
        multiTranslationBodyHelper: function(){
            return {
                body: [],
                add_text: function(id__, text__){this.body.push({'id': id__, 'text':text__});}
            }
        },

        /* Object headers to multi translation function */
        multiTranslationHeaderHelper: function(accessToken__, accessKey__){
            return {
                'Authorization': "Bearer " + accessToken__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to multi translation function */
        multiTranslationParametersHelper: function(appid__, from__, to__, contentType__, category__, profanityAction__, state__, uri__, user__){
            return {
                'appid': appid__,
                'from': from__,
                'options': {
                    'Category': category__,
                    'ContentType': contentType__,
                    'ProfanityAction': profanityAction__,
                    'State': state__,
                    'Uri': uri__,
                    'User': user__
                },
                'to': to__
            }
        },

        /* Description get multi translation service */
        multiTranslationDescription: function(){
            return {
                "request": {
                    "path": "https://api.microsofttranslator.com/V2/Http.svc/TranslateArray",
                    "method": "POST",
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Authorization": {
                                "type": "string",
                                "description": "Required if the appid field or Ocp-Apim-Subscription-Key header is not specified. Authorization token: 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "Ocp-Apim-Subscription-Key": {
                                "type": "string",
                                "description": "Subscription key which provides access to this API. Found in your Cognitive Services accounts.",
                                "required": true
                            }
                        }
                    },
                    "body": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "id": {
                                    "type": "string"
                                },
                                "text": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "appid": {
                                "type": "string",
                                "description": "Required. If the Authorization or Ocp-Apim-Subscription-Key header is used, leave the appid field empty else include a string containing 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "from": {
                                "type": "string",
                                "description": "Optional. A string representing the language code of the translation text. For example, en for English.",
                                "required": false
                            },
                            "to": {
                                "type": "string",
                                "description": "Required. A string representing the language code to translate the text into.",
                                "required": false
                            },
                            "object": {
                                "type": "object",
                                "properties": {
                                    "Category": {
                                        "type": "string",
                                        "description": "A string containing the category (domain) of the translation. Defaults to general."
                                    },
                                    "ContentType": {
                                        "type": "string",
                                        "description": "The format of the text being translated. The supported formats are text/plain (default), text/xml and text/html. Any HTML needs to be a well-formed, complete element."
                                    },
                                    "ProfanityAction": {
                                        "type": "string",
                                        "description": "Specifies how profanities are handled as explained above. Accepted values of ProfanityAction are NoAction (default), Marked and Deleted."
                                    },
                                    "State": {
                                        "type": "string",
                                        "description": "User state to help correlate request and response. The same contents will be returned in the response."
                                    },
                                    "Uri": {
                                        "type": "string",
                                        "description": "Filter results by this URI. Default: all."
                                    },
                                    "User": {
                                        "type": "string",
                                        "description": "Filter results by this user. Default: all."
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "array",
                    "items": {
                        "type": "object"
                    }
                }
            }
        },

        /* Retrieves friendly names for the languages passed in as the parameter languageCodes, and localized using the passed locale language. */
        getLanguageNames: function(body__, headers__, parameters__, callback){
            if (headers__ == null){ headers__ = {'Authorization': this.accessToken, 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'POST', uri: 'https://' + this.endPoint + this.pathLanguageNames, qs: parameters__, headers: headers__, body: body__};
            rp(options).then(function (parsedBody) {            
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            }); 
        },

        /* Object body to get language names function */
        getLanguageNamesBodyHelper: function(){
            return {
                body: [],
                add_language_codes: function(language_code__){this.body.push(language_code__);}
            }
        },

        /* Object headers to get language names function */
        getLanguageNamesHeaderHelper: function(accessToken__, accessKey__){
            return {
                'Authorization': "Bearer " + accessToken__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to get language names function */
        getLanguageNamesParametersHelper: function(appid__, locale__){
            return {
                'appid': appid__,
                'locale': locale__
            }
        },

        /* Description get language names service */
        getLanguageNamesDescription: function(){
            return {
                "request": {
                    "path": "https://api.microsofttranslator.com/V2/Http.svc/GetLanguageNames",
                    "method": "POST",
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Authorization": {
                                "type": "string",
                                "description": "Required if the appid field or Ocp-Apim-Subscription-Key header is not specified. Authorization token: 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "Ocp-Apim-Subscription-Key": {
                                "type": "string",
                                "description": "Subscription key which provides access to this API. Found in your Cognitive Services accounts.",
                                "required": true
                            }
                        }
                    },
                    "body": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "appid": {
                                "type": "string",
                                "description": "Required. If the Authorization or Ocp-Apim-Subscription-Key header is used, leave the appid field empty else include a string containing 'Bearer' + '' + 'access_token'.",
                                "required": false
                            },
                            "locale": {
                                "type": "string",
                                "description": "Required. A string representing a combination of an ISO 639 two-letter lowercase culture code associated with a language and an ISO 3166 two-letter uppercase subculture code to localize the language names or a ISO 639 lowercase culture code by itself.",
                                "required": false
                            }
                        }
                    }
                },
                "response": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                }
            }
        },

        /* Obtain a list of language codes representing languages that are supported by the Translation Service. Translate and TranslateArray can translate between any two of these languages. */
        getLanguageForTranslate: function(headers__, parameters__, callback){
            if (headers__ == null){ headers__ = {'Authorization': this.accessToken, 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'GET', uri: 'https://' + this.endPoint + this.pathLanguageForTranslate, qs: parameters__, headers: headers__};
            rp(options).then(function (parsedBody) {            
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });  
        },

        /* Object headers to get language for translate function */
        getLanguageForTranslateHeaderHelper: function(accessToken__, accessKey__){
            return {
                'Authorization': "Bearer " + accessToken__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to get language for translate function */
        getLanguageForTranslateParametersHelper: function(appid__){
            return {
                'appid': appid__
            }
        },

        /* To be implemented in the future:
            getLanguagesForSpeak
            speak
            detect
            detectArray
            addTranslation
            addTranslationArray
            breakSentences
            getTranslations
            getTranslationsArray
        */
    }
}