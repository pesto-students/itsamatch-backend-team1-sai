const config = {
  PORT: process.env.PORT || 9000,
  SENTRY_DSN: process.env.SENTRY_DSN,
  MONGO_URI:
    process.env.MONGO_URI ||
    'mongodb+srv://rakeshrengaraj:itsamatch@cluster0.phjcbcc.mongodb.net/?retryWrites=true&w=majority',
  OKTA_URL: process.env.OKTA_URL || 'https://dev-53982526.okta.com/oauth2/default',
  OKTA_TOKEN: process.env.OKTA_TOKEN || '00CqKjagqlXc6H3KIGOe6ezzWr1mQPRfwtVEybmbcK',
};

export default config;
