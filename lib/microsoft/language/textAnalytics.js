/*
The Text Analytics API is a suite of text analytics web services built with best-in-class Microsoft machine learning algorithms. The API can be used to analyze unstructured text for tasks such as sentiment analysis, key phrase extraction and language detection. No training data is needed to use this API; just bring your text data. This API uses advanced natural language processing techniques to deliver best in class predictions.
for more info: https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c7
*/
var rp = require('request-promise');

module.exports = function(accessKey__, endPoint__){
    return {
        pathSentiment: '/text/analytics/v2.0/sentiment', 
        pathLanguage: '/text/analytics/v2.0/languages', 
        pathKeyPhrases: '/text/analytics/v2.0/keyPhrases',
        accessKey: accessKey__,
        endPoint: endPoint__,
        
        /* The API returns a numeric score between 0 and 1. Scores close to 1 indicate positive sentiment, while scores close to 0 indicate negative sentiment. Sentiment score is generated using classification techniques. The input features to the classifier include n-grams, features generated from part-of-speech tags, and word embeddings. */
        sentiment: function(body__, headers__, callback){
            if (headers__ == null){ headers__ =  { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'POST', uri: 'https://' + this.endPoint + this.pathSentiment, headers: headers__, body: body__, json: true}; 
            rp(options).then(function (parsedBody) {
                callback(null, JSON.stringify (parsedBody, null, '  '));
            }).catch(function (err) {
                callback(JSON.stringify (err, null, '  '), null);
            });
        },

        /* Object body to sentiment function */
        sentimentBodyHelper: function(){
            return {
                body: {"documents": []},
                add_document: function(id__, text__, language__){ this.body.documents.push({"language": language__,"id": id__,"text": text__});}
            }
        },

        /* Object headers to sentiment function */
        sentimentHeaderHelper: function(contentType__, accessKey__){
            return {
                'Content-Type': contentType__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Description sentiment service */
        sentimentDescription: function(){
            return {
                "request": {
                    "path": "https://[location].api.cognitive.microsoft.com/text/analytics/v2.0/sentiment",
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
                    "body": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "language": {
                                        "type": "string",
                                        "description": "This is the 2 letter ISO 639-1 representation of a language.\r\n For example, use \"en\" for English; \"es\" for Spanish etc.",
                                        "required": true
                                    },
                                    "id": {
                                        "type": "string",
                                        "description": "Unique, non-empty document identifier.",
                                        "required": true
                                    },
                                    "text": {
                                        "type": "string",
                                        "description": "Text to analyze.",
                                        "required": true
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "score": {
                                        "type": "number",
                                        "format": "double",
                                        "description": "A decimal number between 0 and 1 denoting the sentiment of the document. \r\n            A score above 0.7 usually refers to a positive document while a score below 0.3 normally has a negative connotation.\r\n            Mid values refer to neutral text."
                                    },
                                    "id": {
                                        "type": "string",
                                        "description": "Unique document identifier."
                                    }
                                }
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                        "description": "Input document unique identifier the error refers to."
                                    },
                                    "message": {
                                        "type": "string",
                                        "description": "Error message."
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        /* The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. A total of 120 languages are supported. */
        language: function(body__, headers__, parameters__, callback) {
            if (headers__ == null){ headers__ =  { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'POST', uri: 'https://' + uri: 'https://' + this.endPoint + this.pathLanguage, qs: parameters__, headers: headers__, body: body__, json: true};
            rp(options).then(function (parsedBody) {
                callback(null, JSON.stringify (parsedBody, null, '  '));
            }).catch(function (err) {
                callback(JSON.stringify (err, null, '  '), null);
            });
        },

        /* Object body to language function */
        languageBodyHelper: function(){
            return {
                body: {"documents": []},
                add_document: function(id__, text__){ this.body.documents.push({"id": id__,"text": text__});}
            }
        },

        /* Object headers to language function */
        languageHeaderHelper: function(contentType__, accessKey__){
            return {
                'Content-Type': contentType__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Description language service */
        languageDescription: function(){
            return {
                "request": {
                    "path": "https://[location].api.cognitive.microsoft.com/text/analytics/v2.0/languages[?numberOfLanguagesToDetect]",
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
                    "body": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                        "description": "Unique, non-empty document identifier.",
                                        "required": true
                                    },
                                    "text": {
                                        "type": "string",
                                        "description": "Text to analyze.",
                                        "required": true
                                    }
                                }
                            }
                        }
                    },
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "numberOfLanguagesToDetect": {
                                "type": "integer",
                                "description": "Number of languages to detect. Set to 1 by default. Irrespective of the value, the language with the highest score is returned.",
                                "required": false
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "description": "Unique document identifier.",
                                        "type": "string"
                                    },
                                    "detectedLanguages": {
                                        "description": "A list of extracted languages.",
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                                "properties": {
                                                    "name": {
                                                        "description": "Long name of a detected language (e.g. English, French).",
                                                        "type": "string"
                                                    },
                                                    "iso6391Name": {
                                                        "description": "A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr).",
                                                        "type": "string"
                                                    },
                                                    "score": {
                                                        "format": "double",
                                                        "description": "A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true.",
                                                        "type": "number"
                                                    }
                                                }
                                        }
                                    }
                                }
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "description": "Input document unique identifier the error refers to.",
                                        "type": "string"
                                    },
                                    "message": {
                                        "description": "Error message.",
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        /* The API returns a list of strings denoting the key talking points in the input text. We employ techniques from Microsoft Office's sophisticated Natural Language Processing toolkit. */
        keyPhrases: function(body__, headers__, callback) {
            if (headers__ == null){ headers__ =  { 'Content-Type': 'application/json', 'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'POST', uri: 'https://' + uri: 'https://' + this.endPoint + this.pathKeyPhrases, headers: headers__, body: body__, json: true};
            rp(options).then(function (parsedBody) {
                callback(null, JSON.stringify (parsedBody, null, '  '));
            }).catch(function (err) {
                callback(JSON.stringify (err, null, '  '), null);
            });
        },

        /* Object body to key phrases function */
        keyPhrasesBodyHelper: function(){
            return {
                body: {"documents": []},
                add_document: function(id__, text__){ this.body.documents.push({"id": id__,"text": text__});}
            }
        },

        /* Object headers to key phrases function */
        keyPhrasesHeaderHelper: function(contentType__, accessKey__){
            return {
                'Content-Type': contentType__, 'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Description key phrases service */
        keyPhrasesDescription: function(){
            return {
                "request": {
                    "path": "https://[location].api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases",
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
                    "body": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "language": {
                                        "type": "string",
                                        "description": "This is the 2 letter ISO 639-1 representation of a language.\r\n For example, use \"en\" for English; \"es\" for Spanish etc.",
                                        "required": true
                                    },
                                    "id": {
                                        "type": "string",
                                        "description": "Unique, non-empty document identifier.",
                                        "required": true
                                    },
                                    "text": {
                                        "type": "string",
                                        "description": "Text to analyze.",
                                        "required": true
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "documents": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "keyPhrases": {
                                        "description": "A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document.",
                                        "type": "array",
                                        "items": {
                                          "type": "string"
                                        }
                                    },
                                    "id": {
                                        "description": "Unique document identifier.",
                                        "type": "string"
                                    }
                                }
                            }
                        },
                        "errors": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "description": "Input document unique identifier the error refers to.",
                                        "type": "string"
                                    },
                                    "message": {
                                        "description": "Error message.",
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    }
}




    

