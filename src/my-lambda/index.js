/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/require-await */

async function main(event) {
  console.log('BUCKET_NAME 👉', process.env.BUCKET_NAME);

  return {
    body: JSON.stringify({message: `${process.env.BUCKET_NAME} 🎉`}),
    statusCode: 200,
  };
}

module.exports = {main};
