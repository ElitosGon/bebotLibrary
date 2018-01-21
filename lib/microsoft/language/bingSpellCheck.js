/*
The Spell Check API lets you check a text string for spelling and grammar errors. This section provides technical details about the query parameters and headers that you use to request spell checking, and the JSON response objects that contain the results. 
*/
var rp = require('request-promise');

module.exports = function(accessKey__, endPoint__){
    return {
        pathSpellCheck: '/bing/v7.0/spellcheck/', 
        accessKey: accessKey__,
        endPoint: endPoint__,

        /* Analyze text with bing spell check. */
        getSpellCheck: function(headers__, parameters__, callback) {
            if (headers__ == null){ headers__ =  {'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = {method: 'GET', uri: 'https://' + this.endPoint + this.pathSpellCheck, qs: parameters__, headers: headers__, json: true}
            rp(options).then(function (parsedBody) {
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });
        },

        /* Object headers to get spell check function */
        getSpellCheckHeaderHelper: function(accessKey__){
            return {
                'Ocp-Apim-Subscription-Key': accessKey__
            }
        },

        /* Object parameters to get spell check function */
        getSpellCheckParametersHelper: function(text__, mode__, preContextText__, postContextText__, mkt__){
            return {
                'text': text__,
                'mode': mode__,
                'preContextText': preContextText__,
                'postContextText': postContextText__,
                'mkt': mkt__
            }
        },

        /* Description get spell check service */
        getSpellCheckDescription: function(){
            return {
                "request": {
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/spellcheck/[?text][&mode][&preContextText][&postContextText][&mkt]",
                    "method": "GET",
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Ocp-Apim-Subscription-Key": {
                                "type": "string",
                                "description": "Subscription key which provides access to this API. Found in your Cognitive Services accounts.",
                                "required": true
                            }
                        }
                    },
                    "parameters": {
                        "properties": {
                            "text": {
                                "type": "string",
                                "description": "The text string to check for spelling and grammar errors.",
                                "required": true
                            },
                            "mode": {
                                "type": "string",
                                "description": "Mode of spellcheck.",
                                "options": ["Proof", "Spell"],
                                "required": false
                            },
                            "preContextText": {
                                "type": "string",
                                "description": "A string that gives context to the text string. For example, the text string petal is valid; however, if you set preContextText to bike, the context changes and the text string becomes not valid. In this case, the API will suggest that you change petal to pedal (as in bike pedal).",
                                "required": false
                            },
                            "postContextText": {
                                "type": "string",
                                "description": "A string that gives context to the text string. For example, the text string read is valid; however, if you set postContextText to carpet, the context changes and the text string becomes not valid. In this case, the API will suggest that you change read to red (as in red carpet).",
                                "required": false
                            },
                            "mkt": {
                                "type": "string",
                                "description": "For proof mode, only support en-us, es-es, pt-br, For spell mode, support all language codes.",
                                "required": false
                            },
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "flaggedTokens": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "offset": {
                                        "type": "number",
                                    },
                                    "token": {
                                        "type": "string",
                                    },
                                    "type": {
                                        "type": "string",
                                    },
                                    "suggestions": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "suggestion": {
                                                    "type": "string"
                                                },
                                                "score": {
                                                    "type": "number",
                                                    "format": "double",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "error": {
                            "statusCode": {
                                "type": "number"
                            },
                            "message": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        },

        /* Analyze text with bing spell check. */
        postSpellCheck: function(body__, headers__, parameters__, callback) {
            if (headers__ == null){ headers__ =  { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = {method: 'GET', uri: 'https://' + this.endPoint + this.pathSpellCheck, qs: parameters__, headers: headers__, body: body__, json: true}
            rp(options).then(function (parsedBody) {
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });
        },

        /* Object body to post spell check function */
        postSpellCheckBodyHelper: function(text__){
            return {
                'text': text__
            }
        },

        /* Object headers to post spell check function */
        postSpellCheckHeaderHelper: function(contentType__, accessKey__){
            return {
                'Content-Type': contentType__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to post spell check function */
        postSpellCheckParametersHelper: function(mode__, mkt__){
            return {
                'mode': mode__,
                'mkt': mkt__
            }
        },

        /* Description post spell check service */
        postSpellCheckDescription: function(){
            return {
                "request": {
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/spellcheck/[?mode][&mkt]",
                    "method": "POST",
                    "headers": {
                        "type": "object",
                        "properties": {
                            "Content-Type": {
                                "type": "string",
                                "description": "Media type of the body sent to the API.",
                                "options": ["application/json", "text/json"],
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
                        "properties": {
                            "mode": {
                                "type": "string",
                                "description": "Mode of spellcheck.",
                                "options": ["Proof", "Spell"],
                                "required": false
                            },
                            "mkt": {
                                "type": "string",
                                "description": "For proof mode, only support en-us, es-es, pt-br, For spell mode, support all language codes.",
                                "required": false
                            },
                        }
                    },
                    "body": {
                        "properties": {
                            "text": {
                                "type": "string"
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "flaggedTokens": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "offset": {
                                        "type": "number",
                                    },
                                    "token": {
                                        "type": "string",
                                    },
                                    "type": {
                                        "type": "string",
                                    },
                                    "suggestions": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "suggestion": {
                                                    "type": "string"
                                                },
                                                "score": {
                                                    "type": "number",
                                                    "format": "double",
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "error": {
                            "statusCode": {
                                "type": "number"
                            },
                            "message": {
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    }
}