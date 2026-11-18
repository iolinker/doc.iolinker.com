## Indroduction
You can use **telegram bot trigger** app to receive bot message from group(the telegram bot should be set as the **group administrator**) or private user, and you can monitor specific keyword and  users.

<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/3rH2ahw9SYk"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>

## Parameter

### (1) Telegram Bot Token Credential

First, you can use Telegram App or Telegram Client to create your bot with official BotFather bot.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

In **BotFather**, you can use ```/newbot``` command to create you own bot in seconds. After that, you will get you bot link and token.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Back in RobinFlow, you can use the telegram token created before to create **【Telegram Credential】**, which will use in **【Telegram Bot Trigger】**.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

### (2) Telegram Bot Trigger App

> Cred

The telegram token created in credential list, which is related to your own bot.

> Username

If you set the telegram users, you will receive all the message send from them, otherwise you will receive all the message send from group and user.

> And Keyword

You can monitor chat message(from group or private user) with specific keywords, and the workflow execution will only triggered when all these keywords are matched

> Or Keyword

You can monitor chat message(from group or private user) with specific keywords, and as long as one of these keywords matches, it can trigger the workflow execution.

> DebugData

The **【DebugData】** parameter is mainly to facilitate debugging when designing the workflow.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.
