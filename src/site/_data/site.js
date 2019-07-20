const env = process.env.ELEVENTY_ENV;
const envConfig = require(`./${env}/envconfig`);

const baseConfig = {
  'name': 'Aceler Chua',
  'description': 'Designer of typefaces, producer of fonts, and maker of websites.',
  'textDomain': 'aclr',
  'environment': env,
};

module.exports = Object.assign(baseConfig, envConfig);
