module.exports = {
	microsoft: {
		// Language
		textAnalytics: require('./lib/microsoft/language/textAnalytics'),
		bingSpellCheck: require('./lib/microsoft/language/bingSpellCheck'),
		textTranslate: require('./lib/microsoft/language/textTranslate'),

		// Search
		bingSearchNews: require('./lib/microsoft/search/bingSearchNews'),
		bingSearchWeb: require('./lib/microsoft/search/bingSearchWeb'),
	}
}

