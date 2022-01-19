const axios = require('axios');

exports.faunaFetch = async ({ query, variables }) => {
  return await axios({
    url: 'https://graphql.fauna.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SERVER_KEY}`,
    },
    data: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(JSON.stringify(err, null, 2)));
};