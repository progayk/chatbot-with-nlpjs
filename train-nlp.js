



const { NlpManager } = require('node-nlp');

const corpusData = require('./corpus-tr.json')

const Locale = 'tr';

(async () => {
    // let filename = 'my-agent'
    const manager = new NlpManager({ languages: [Locale], autoSave: true });
    // const context = new ConversationContext();

    manager.addCorpus(corpusData)


    // manager.addDocument(Locale, 'Selam ismin %name%', 'greeting.hello');
    // manager.addDocument(Locale, 'Gitmem lazim', 'greeting.bye');
    // manager.addAnswer(Locale, 'greeting.hello', 'selam');
    // manager.addAnswer(Locale, 'greeting.bye', 'Bye, {{name}}!');


    await manager.train();
    manager.export(true);
    // const data = manager.export(true);
    // export as
    // manager.save(filename)
    // manager.export()
})()


