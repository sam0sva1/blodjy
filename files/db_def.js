var Sequelize = require('sequelize');

var db = {};

db.sequelize = new Sequelize('Blodjy_db', 'postgres', null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: console.log,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

db.user = db.sequelize.define('user', {
	userName: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	posts: {
		type: Sequelize.ARRAY(Sequelize.TEXT)
	},
	comments: {
		type: Sequelize.ARRAY(Sequelize.TEXT)
	},
	replays: {
		type: Sequelize.ARRAY(Sequelize.TEXT)
	},
}, {
	freezeTableName: true
});

db.post = db.sequelize.define('post', {
	type: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	title: {
		type: Sequelize.STRING
	},
	text: {
		type: Sequelize.TEXT
	},
	date: {
		type: Sequelize.STRING
	}
});

db.comment = db.sequelize.define('comment', {
	parentId: {
		type: Sequelize.STRING
	},
	type: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	text: {
		type: Sequelize.TEXT
	},
	date: {
		type: Sequelize.STRING
	}
});

db.reply = db.sequelize.define('reply', {
	parentId: {
		type: Sequelize.STRING
	},
	type: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	text: {
		type: Sequelize.TEXT
	},
	date: {
		type: Sequelize.STRING
	}
});

module.exports = db;
