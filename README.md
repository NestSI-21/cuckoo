# Cuckoo

![cuckoobanner](https://user-images.githubusercontent.com/44748017/130648943-eae77a6d-21e2-450b-acb6-5e7241c7e5e3.jpg)

## What is Cuckoo ?

Cuckoo is a open source slackbot directed to companies and work teams that uses Slack to communicate. It focuses on storing your important Slack Posts in one place so that you don’t miss a thing. 

<br/>

<h1 align="center"><i>Keep your team in sync!</i></h1>

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
<h3>1. Clone this repository</h3>

```
$ git clone https://github.com/NestSI-21/cuckoo.git
```


<h3>1. Install the <a href="https://slack.com/apps/A0280GPQ9GU-cuckoo?next_id=0">application</a> on your organization's Slack workspace </h3>

<h3>2. Create the App</h3>
<p>- Go to <a href="https://api.slack.com/" target="_blank">api.slack</a> and create a new App from scratch<p>
<p>- Call it Cuckoo and choose your workspace<p>
<img width="546" alt="Screenshot 2021-08-24 at 17 34 38" src="https://user-images.githubusercontent.com/44748017/130656117-a7f780d7-36ae-43f9-bd93-d33a7b6dc756.png">
  
<h3>2. Setup the App</h3>
  
<p>- Go to Settings/Basic Information/App Credentials, and look for the following information to add to the respective files:<p>
  
In `client/.env`:
  
```
REACT_APP_SLACK_CLIENT_ID=
```

<p>- Now, cpomplete the file with the requested information:<p>
 
  
```
REACT_APP_SLACK_REDIRECT_URL= yourFrontend.com/api/v1/auth/slack
REACT_APP_API_BASE_URL= http://localhost:8000 (to run it locally)
```

##
  
In `server/.env`:
```
SLACK_CLIENT_ID =
SLACK_CLIENT_SECRET =
FRONTEND_HOST =
SLACK_OAUTH_TOKEN =
SLACK_WEBHOOK =
```
 


