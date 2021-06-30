const { customAlphabet, urlAlphabet } = require('nanoid');
const TinyURLModel = require('./models/TinyURL');

const nanoid = customAlphabet(urlAlphabet, 6);

const HOSTURL = process.env.REQUEST_URL;

exports.createSlug = (req) => {
  const payload = JSON.parse(req.body.payload);
  const fullUrl = payload.view.state.values.block_1.input_1.value;
  const slug = nanoid();
  const tinyUrl = `${HOSTURL}/${slug}`;

  TinyURLModel.create({ slug: `${slug}`, url: `${fullUrl}` });

  return tinyUrl;
};

exports.redirectToURL = (req, res) => {
  const { id: slug } = req.params;

  tinyURLModel.findOne({ slug: `${slug}` }, function (err, docs) {
    console.log('Found the following records');
    console.log(docs);

    if (docs) {
      return res.redirect(docs.url);
    }
    return res.status(404);
  });
};
