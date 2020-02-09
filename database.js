const Promise = require('bluebird');
const sqlite = require('sqlite');
const dbCon = sqlite.open('example.db', {Promise});

const doQueryCB = () => {
    dbCon.then(con => {
        con.all('SELECT username, id FROM users ORDER BY username ASC')
            .then((rows) => {
                console.log(rows);
            })
            .catch((error) => {
                console.log(e)
            })
            .finally(() => {
                console.log('Were done');
            });
    });
}

const doQuery = async () => {
    const db = await dbCon;
    const users = await db.all('SELECT username, id FROM users ORDER BY username ASC');
    console.log(users);
};
doQueryCB();
doQuery();