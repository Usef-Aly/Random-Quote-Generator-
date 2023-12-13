const Quotes = [
    {'author': 'Oscar Wilde', 
    'quote': 'Be yourself; everyone else is already taken.'
    },
    {'author': 'Mahatma Gandhi', 
    'quote': 'Be the change that you wish to see in the world.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Marcus Tullius Cicero', 
    'quote': 'A room without books is like a body without a soul.'
    },
    {'author': 'Frank Zappa', 
    'quote': 'So many books, so little time.'
    },
    {'author': 'Mark Twain', 
    'quote': 'If you tell the truth, you don\'t have to remember anything.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {'author': 'Oscar Wilde', 
    'quote': 'Always forgive your enemies; nothing annoys them so much.'
    },
    {'author': 'أبو تمام', 
    'quote': 'لَيسَ الغَبِيُّ بِسَيِّدٍ في قَومِهِ لَكِنَّ سَيِّدَ قَومِهِ المُتَغابي'
    },
];

function RQG(){
    const random = Number.parseInt(Math.random()*Quotes.length);
    document.querySelector('#Quote').textContent = `\"${Quotes[random].quote}\"`;
    document.querySelector('#Author').textContent = `-${Quotes[random].author}-`;
}