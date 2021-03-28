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
        text: 'What hours are you open?',
        value: 'hours'
      },
      {
        text: 'What do you do?',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'That’s a good one! This is a website, it’s always open.';
  }
  else if (res.value === "do") {
    message = 'We are a medical communications company.<br><br>We are dedicated to giving practices more efficient and effective tools to help their customers.';
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
