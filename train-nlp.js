



const { NlpManager, ConversationContext } = require('node-nlp');

const corpusData = require('./corpus-tr.json')

const Locale = 'tr';
const manager = new NlpManager({ languages: [Locale], autoSave: false, forceNER: true });
const context = new ConversationContext();

console.log('contxt', context.settings);

(async () => {

    manager.addCorpus(corpusData)


    // context
    manager.addDocument(Locale, 'Selam ismim %name%', 'greeting.hello');
    manager.addDocument(Locale, 'Gitmem lazim', 'greeting.bye');
    manager.addAnswer(Locale, 'greeting.hello', 'selam {{name}}');
    manager.addAnswer(Locale, 'greeting.bye', 'Bye, {{name}}!');


    // named entities
    manager.addNamedEntityText(
        'food',
        'burger',
        [Locale],
        ['Burger', 'Hamburger'],
    );
    manager.addNamedEntityText('food', 'pizza', [Locale], ['pizza']);
    manager.addNamedEntityText('food', 'pasta', [Locale], ['makarna', 'spagetti']);


    manager.addDocument(Locale, '@food yemek istiyorum', 'wanteat');
    manager.addAnswer(Locale, 'wanteat', '{{food}} yemeye gidelim o zaman!');



    await manager.train();


    console.log('context', context);


    // manager.process(Locale, 'makarna yemek istiyorum')
        // .then(result => manager.process(Locale, 'Gitmem lazim', context))
        // .then(result => console.log(result));


    manager.save();


})()


