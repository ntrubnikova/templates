$('article').readingTime({
		readingTimeAsNumber: false,
		readingTimeTarget: $('.eta'),
		wordCountTarget: $('.words'),
		wordsPerMinute: 275,
		round: true,
		lang: 'en',
		prependTimeString:'',
		prependWordString:''
	});

$('.words').before('(');
$('.words').after(' words)');


