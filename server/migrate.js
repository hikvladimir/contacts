const sqlite = require('sqlite');



const run = async () => {
    try {

        const dbPromise = sqlite.open('./test.sqlite');
        const db = await dbPromise;
        await db.migrate();
    } catch (err) {
        console.log(err.message);
    }

    console.log('done');
};

run();
