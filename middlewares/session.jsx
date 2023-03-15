import session from 'next-session';
import connectMongo from 'connect-mongo';

const MongoStore = connectMongo(session);

export default function (req, res, next) {

    console.error(new MongoStore)
  return session({ store: new MongoStore({ client: req.dbClient }) })(req, res, next);
}
