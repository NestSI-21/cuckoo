# Cuckoo

![readmebanner](https://user-images.githubusercontent.com/44748017/130473873-442cb510-63dc-4e0f-8a66-f10a5c7af812.jpg)

## What is Cuckoo ?

Cuckoo is a open source slackbot directed to companies and work teams that uses Slack to communicate. It focuses on storing your important Slack Posts in one place so that you don’t miss a thing. 

<br/>

<h1 align="center" color="red"><i>Keep your team in sync!</i></h1>

<h3>How it works? 🤔</h3>
<p>- With Cuckoo you can create <b>events or announcements</b> that will be published on the platform's "Cuckoos feed" where you can find all the posts previously published by other members of your organisation.</p>
<p>- These posts will also be sent to a channel on your <b>slack workspace</b>, depending on their category. A <b>reminder</b> will also be sent 1 day before the event starts.</p>
<p>- Events will go into a <b>collective calendar</b>. This way you will quickly have access to what will be happening in the following days, so that you don’t miss a thing.</p>

#
<p align="center">
  <img align="center" width="702" alt="devices" src="https://user-images.githubusercontent.com/44748017/130469973-84bb814b-b16a-43e3-ace2-50cba78b524e.png">
</p>

<p>Cuckoo is a platform that can be used through your desktop computer, phone, or any other device. </p>

<hr />

## Getting Started
<h3>1. Install the <a href="/">application</a> on your organisation's Slack workspace </h3>

<h3>2. Setup the App</h3>
<p>- Go to <a href="https://api.slack.com/" target="_blank">api.slack</a> and search for Cuckoo in "Your Apps" section;<p>

<p>- Go to settings and look for the following information to add to the respective files:<p>
  
In `client/.env`:
```
REACT_APP_SLACK_CLIENT_ID=
REACT_APP_SLACK_REDIRECT_URL=
REACT_APP_API_BASE_URL=
```
  
In `server/.env`:
```
SLACK_CLIENT_ID =
SLACK_CLIENT_SECRET =
FRONTEND_HOST =
SLACK_OAUTH_TOKEN =
SLACK_WEBHOOK =
```
  
<h3>3. Create AWS s3 container to store images</h3>

- Add these 2 lines to the file `server/.env` with the requested information from AWS
```
AWS_ACCESS_KEY_ID = AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY = wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```


