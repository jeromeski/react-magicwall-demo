module.exports = function override(config, env) {
	//do stuff with the webpack config...
	return config;
};

/*
module: {
    rules: [ 
      {test: require.resolve('jquery'), loader: 'expose-loader?$!expose-loader?jQuery'}
    ]
  }
*/
