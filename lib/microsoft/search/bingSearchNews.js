/*
The News API lets partners send a search query to Bing and get back a list of relevant news articles. Note you should call the News API if you need news content only. If you need other content such as images and webpages in addition to images, you must call the Search API which includes news articles in the response. You must display the news articles in the order provided in the response.
*/
var rp = require('request-promise');

module.exports = function(accessKey__, endPoint__){
    return {
        pathCategoryNews: '/bing/v7.0/news/', 
        pathSearch: '/bing/v7.0/news/search',
        pathTrendingTopics: '/bing/v7.0/news/trendingtopics',
        accessKey: accessKey__,
        endPoint: endPoint__,

        /* Returns news for a provided category. */
        categoryNews: function(headers__, parameters__, callback){
            if (headers__ == null){ headers__ =  {'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'GET', uri: 'https://' + this.endPoint + this.pathCategoryNews, qs: parameters__, headers: headers__, json: true}; 
            rp(options).then(function (parsedBody) {
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });
        },

        /* Object headers to category news function */
        categoryNewsHeaderHelper: function(accessKey__){
            return {
                'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to category news function */
        categoryNewsParametersHelper: function(category__){
            return {
                'Category': category__
            }
        },

        /* Description category news service */
        categoryNewsDescription: function(){
            return {
                "request": {
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/news/[?Category]",
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
                        "type": "object",
                        "properties": {
                            "Category": {
                                "type": "string",
                                "description": "Specifies which category of news articles the caller wants returned.",
                                "required": true
                            }
                        }
                    }
                }
            }
        },

        /* Get news articles relevant for a given query. */
        search: function(headers__, parameters__, callback){
            if (headers__ == null){ headers__ =  {'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'GET', uri: 'https://' + this.endPoint + this.pathSearch, qs: parameters__, headers: headers__, json: true}; 
            rp(options).then(function (parsedBody) {
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });
        },

        /* Object headers to search function */
        searchHeaderHelper: function(accessKey__){
            return {
                'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

        /* Object parameters to search function */
        searchParametersHelper: function(q__, count__, offset__, mkt__, safesearch__){
            return {
                'q': q__,
                'count': count__,
                'offset': offset__,
                'mkt': mkt__,
                'safesearch': safesearch__
            }
        },

        /* Description search service */
        searchDescription: function(){
            return {
                "request": {
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/news/search[?q][&count][&offset][&mkt][&safeSearch]",
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
                        "type": "object",
                        "properties": {
                            "q": {
                                "type": "string",
                                "description": "The user's search query string.",
                                "required": true
                            },
                            "count": {
                                "type": "number",
                                "description": "The number of news results to return in the response. The actual number delivered may be less than requested.",
                                "required": false
                            },
                            "offset": {
                                "type": "number",
                                "description": "The zero-based offset that indicates the number of news results to skip before returning results.",
                                "required": false
                            },
                            "mkt": {
                                "type": "string",
                                "description": "The market where the results come from. Typically, this is the country where the user is making the request from; however, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form -. For example, en-US.",
                                "required": false
                            },
                            "safesearch": {
                                "type": "string",
                                "description": "A filter used to filter results for adult content.",
                                "required": false
                            }
                        }
                    }
                }
            }
        },

        /* Get trending topics identified by Bing. These are the same topics shown in the banner at the bottom of the Bing home page. */
        trendingTopics: function(headers__, callback){
            if (headers__ == null){ headers__ =  {'Ocp-Apim-Subscription-Key': this.accessKey }}
            var options = { method: 'GET', uri: 'https://' + this.endPoint + this.pathSearch, headers: headers__, json: true}; 
            rp(options).then(function (parsedBody) {
                callback(null, parsedBody);
            }).catch(function (err) {
                callback(err, null);
            });
        },

        /* Object headers to trending topics function */
       trendingTopicsHeaderHelper: function(accessKey__){
            return {
                'Ocp-Apim-Subscription-Key': accessKey__,
            }
        },

       
        /* Description trending topics service */
        trendingTopicsDescription: function(){
            return {
                "request": {
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/news/trendingtopics",
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
                    }
                }
            }
        },
    }
}