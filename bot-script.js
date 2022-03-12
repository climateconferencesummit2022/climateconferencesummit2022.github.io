

var botui = new BotUI('help-bot');


botui.message.add({
  delay: 500,
  loading: true,
  content: 'Hello! I saw that you attended the Alternative Energy Sources lecture.'
}).then(function () {
  return botui.message.add({
    delay: 500,
    loading: true,
    content: 'Do you prefer solar power or wind power?'
  });
}).then(function () {
  return botui.action.button({
    action: [
      {
        text: 'Solar Power',
        value: 'hours'
      },
      {
        text: 'Wind Power',
        value: 'do'
      }
    ]
  });
}).then(function (res) {
  var message;

  if (res.value === "hours") {
    message = 'Me too!<br><br>I thought it was interesting how Marta Bello has worked with her engineering experience to develop her own company.';
  }
  else if (res.value === "do") {
    message = 'Personally, I prefer solar power because it has less of an external impact on the environment.<br><br>I understand your interest in wind power though.';
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
        text: 'Cool! It is nice to meet someone else who is passionate about the environment.',
        value: 'cool'
      }
    ]
  });
}).then(function (chat) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'Thanks. It was fun talking to you!'
  });
});


