const request = require('superagent');
const { createSlug } = require('./slug.js');

const sendSlackWeb = (url, json) => {
  const httpHeaders = {
    'Content-type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${process.env.BOTTOKEN}`,
  };
  request
    .post(url)
    .set(httpHeaders)
    .send(json)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else if (res.body.ok === false) {
        console.log(res.body);
      }
    });
};

exports.viewController = (req, res) => {
  const payload = JSON.parse(req.body.payload);
  switch (payload.type) {
    case 'shortcut':
      res.sendStatus(200);
      sendSlackWeb('https://slack.com/api/views.open', {
        trigger_id: payload.trigger_id,
        view: {
          type: 'modal',
          title: {
            type: 'plain_text',
            text: 'TinyUrl Generator',
            emoji: true,
          },
          submit: {
            type: 'plain_text',
            text: 'Submit',
            emoji: true,
          },
          close: {
            type: 'plain_text',
            text: 'Cancel',
            emoji: true,
          },
          blocks: [
            {
              type: 'input',
              block_id: 'block_1',
              element: {
                type: 'plain_text_input',
                action_id: 'input_1',
              },
              label: {
                type: 'plain_text',
                text: 'Enter a URL',
                emoji: false,
              },
            },
          ],
        },
      });
      break;
    case 'view_submission':
      const tinyUrl = createSlug(req);
      res.set({ 'content-type': 'application/json' });

      res.send({
        response_action: 'update',
        view: {
          type: 'modal',
          title: {
            type: 'plain_text',
            text: 'TinyUrl Generator',
          },
          close: {
            type: 'plain_text',
            text: 'Close',
            emoji: true,
          },
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `Here is your TinyUrl ${tinyUrl}`,
              },
            },
          ],
        },
      });
      break;
  }
};
