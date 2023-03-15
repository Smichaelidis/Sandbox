import nextConnect from 'next-connect';
import middleware from '../../middlewares';

const handler = nextConnect();
handler.use(middleware);

handler.get((req, res) => {
  if (req.user) {
    const {
      name, email, bio, profilePicture, gender
    } = req.user;
    return res.status(200).send({
      status: 'ok',
      data: {
        isLoggedIn: true,
        user: {
          name, email, bio, profilePicture, gender
        },
      },
    });
  }
  return res.status(200).send({
    status: 'ok',
    data: {
      isLoggedIn: false,
      user: {},
    },
  });
});

handler.delete((req, res) => {
  delete req.session.userId;
  return res.status(200).send({
    status: 'ok',
    message: 'You have been logged out.',
  });
});

export default handler;