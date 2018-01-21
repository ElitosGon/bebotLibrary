/*
The Web Search API lets you send a search query to Bing and get back search results that include links to webpages, images, and more. This section provides technical details about the webpages, related searches, and ranking results in addition to the query parameters that affect the search results.
*/
var rp = require('request-promise');

module.exports = function(accessKey__, endPoint__){
    return {
        pathSearch: '/bing/v7.0/search', 
        accessKey: accessKey__,
        endPoint: endPoint__,

        /* The Search API provides a similar (but not exact) experience to Bing.com/Search by returning search results that Bing determines are relevant to the specified query. The results also identify the order that you must display the content in (see Using Ranking to Display Results). The response may also include related search links and suggest a query string that may more accurately represent the user's intent. Typically, you will call this API instead of calling the other APIs in the Bing API family, such as the Image API or News API. */
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
                    "path": "https://api.cognitive.microsoft.com/bing/v7.0/search[?q][&count][&offset][&mkt][&safesearch]",
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
                                "description": "The number of search results to return in the response. The actual number delivered may be less than requested.",
                                "required": false
                            },
                            "offset": {
                                "type": "number",
                                "description": "The zero-based offset that indicates the number of search results to skip before returning results.",
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
    }
}