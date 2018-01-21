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
    5. To be implemented in the future (getLanguagesForSpeak, speak, detect, detectArray, addTranslation, addTranslationArray, breakSentences, getTranslations, getTranslationsArray)
- Bing Search Web API (Microsoft - Search):
    1. search: function(headers__, parameters__, callback);
    

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