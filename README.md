# bebotLibrary (v1.0)
Library for node js that provides an interface to integrate cognitive services to chatbots projects.

## Allows to use with
- Text Analytics API (Microsoft)

### Who use this library ?
Execute:
```
npm install bebot-library
```
Then import in to you project
```
var bebotLibrary = require('bebot-library');

```
Use the methods:
```
var textAnalitycsAPI = bebotLibrary.microsoft.textAnalytics;
var textAnalitycsObject = textAnalitycsAPI('TEXT_ANALITYCS_API_KEY','TEXT_ANALITYCS_API_ENDPOINT');
textAnalitycsObject.sentiment(body, null, function(err, data){
    if(data){
        // process data

    }
    if(err){
        // process error
    }
});
```

### Methos list
- Text Analytics API (Microsoft - Language):
	1. sentiment: function(body__, headers__, callback);
	2. language: function(body__, headers__, parameters__, callback);
	3. keyPhrases: function(body__, headers__, callback);
- Bing Spell Check API (Microsoft - Language):
	1. getSpellCheck: function(headers__, parameters__, callback);
	2. postSpellCheck: function(body__, headers__, parameters__, callback);
- Text Translate API (Microsoft- Language):
    1. translation: function(headers__,parameters__, callback);
    2. multiTranslation: function(body__, headers__, parameters__, callback);
    3. getLanguageNames: function(body__, headers__, parameters__, callback);
    4. getLanguageForTranslate: function(headers__, parameters__, callback);
    5. detect: function(headers__, parameters__, callback);
    6. To be implemented in the future (getLanguagesForSpeak, speak, detectArray, addTranslation, addTranslationArray, breakSentences, getTranslations, getTranslationsArray)
- Bing Search Web API (Microsoft - Search):
    1. search: function(headers__, parameters__, callback);
- Bing Search News API (Microsoft - Search):
    1. categoryNews: function(headers__, parameters__, callback);
    2. search: function(headers__, parameters__, callback);
    3. trendingTopics: function(headers__, callback);
    

### Note: For each method there is a function to build the body, header and parameters.
for example: 
```
    postSpellCheckBodyHelper: function(text__){
        return {
            'text': text__
        }
    },

    postSpellCheckHeaderHelper: function(contentType__, accessKey__){
        return {
            'Content-Type': contentType__, 'Ocp-Apim-Subscription-Key': accessKey__,
        }
    },

    postSpellCheckParametersHelper: function(mode__, mkt__){
        return {
            'mode': mode__,
            'mkt': mkt__
        }
    },
```

## Collaborate with the growth of BeBot Library
- For the creation of a new provider, we recommend integrating this in our index. 
for example: 
```
module.exports = {
	microsoft: {
		...
	},
	ibmwatson: {
		...
	}, ...
}

```
- Similarly if you want to add a new service. You must include the reference to the module where the interface is available.
for example: 
```
module.exports = {
	microsoft: {
		// Language
		textAnalytics: require('./lib/microsoft/language/textAnalytics'),
		...
	},
	ibmwatson: {
		// Language
		ToneAnalyzer: require('./lib/ibmwatson/language/ToneAnalyzer'),
		...
	},
}
```
- Then they must implement the interface for the service considering the following:
1) credentials management.
2) completion of API query.
3) If necessary, you should define components of the query as header or body.
4) Include the description of the query result.
