var posts = [
  {
    id: 'p124578',
    userName: 'Sam',
    title: 'First try',
    text: 'This is my first try of creating a post!',
    date: '26-04-16',
    commentKeeper: [
      {
        id: 'c177578',
        userName: 'Sam',
        text: 'This is a new comment text!',
        date: '27-05-16',
        replyKeeper: [
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new first comment text!',
        		date: '27-05-16'
        	},
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new second comment text!',
        		date: '27-05-16'
        	}
        ]
      },
      {
        id: 'c456789',
        userName: 'Kat',
        text: 'Another one text for comment!',
        date: '28-06-16',
        replyKeeper: []
      }
    ]
  },
  {
    id: 'p124784',
    userName: 'Sam',
    title: 'Second try',
    text: 'That it is! My second post!',
    date: '15-05-16',
    commentKeeper: [
      {
        id: 'c124578',
        userName: 'Sam',
        text: "I'm so glad!",
        date: '16-05-16',
        replyKeeper: [
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new comment text!',
        		date: '27-05-16'
        	}
        ]
      },
      {
        id: 'c456789',
        userName: 'Kat',
        text: 'My congrats!',
        date: '16-05-16',
        replyKeeper: [
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new comment text!',
        		date: '27-05-16'
        	}
        ]
      }
    ]
  },
  {
    id: 'p124544',
    userName: 'Sam',
    title: 'Third try',
    text: 'That it is! My second post!',
    date: '15-05-16',
    commentKeeper: [
      {
        id: 'c124578',
        userName: 'Sam',
        text: "I'm so glad!",
        date: '16-05-16',
        replyKeeper: [
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new comment text!',
        		date: '27-05-16'
        	}
        ]
      },
      {
        id: 'c456789',
        userName: 'Kat',
        text: 'My congrats!',
        date: '16-05-16',
        replyKeeper: [
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new comment text!',
        		date: '27-05-16'
        	},
        	{
        		id: 'r134578',
        		userName: 'Sam',
        		text: 'This is a new comment text!',
        		date: '27-05-16'
        	}
        ]
      }
    ]
  }
];

  module.exports = posts;