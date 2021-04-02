var botui = new BotUI('help-bot');


botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hi! Welcome to ConnectHealth'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'How can we help you?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'What do you do?',
        value: 'hours'
      },
      {
        text: 'What solutions do you offer?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'We are a medical communications company.<br><br>We are dedicated to giving practices more efficient and effective tools to help their customers.';
  }
  else if (res.value === "do") {
    message = 'We offer six different solutions:<br><br>Direct Chat Line, Automatic Messaging, Access to Analytics, Online Scheduling, Video Serrvices, Medical Record Database';
  }

  return botui.message.add({
    type: 'html',
    delay: 1000,
    loading: true,
    content: message
  });
}).then(function (chat) {
  return botui.action.button({
    action: [
      {
        text: 'Cool!',
        value: 'cool'
      }
    ]
  });
}).then(function (chat) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Thanks. We thought so too!'
  });
});
