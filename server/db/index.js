const sqlite = require('sqlite');


async function insertMassage({
                           email,
                            userName,
                          time=Date.now(),
                          value,
                      }) {
    const dbPromise = sqlite.open('./test.sqlite');
    const db = await dbPromise;
    return db.run(
        `INSERT INTO Message (
      email,
      userName,
      time,
      value)
    VALUES (?, ?, ?, ?)`,
        email,
        userName,
        time,
        value,
    );
}
module.exports={insertMassage};