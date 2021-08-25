# Cuckoo

![cuckoobanner](https://user-images.githubusercontent.com/44748017/130648943-eae77a6d-21e2-450b-acb6-5e7241c7e5e3.jpg)

## What is Cuckoo ?

Cuckoo is a open source **slackbot** directed to companies and work teams that uses Slack to communicate. It focuses on **storing your important Slack Posts** in one place so that you don’t miss a thing. 

<br/>

<h1 align="center"><i>Keep your team in sync!</i></h1>

<h3>How it works? 🤔</h3>
<p>- With Cuckoo you can create <b>events or announcements</b> that will be published on the platform's "Cuckoos feed" where you can find all the posts previously published by other members of your organisation.</p>
<p>- These posts will also be sent to a channel on your <b>slack workspace</b>, depending on their category. A <b>reminder</b> will also be sent 1 day before the event starts.</p>
<p>- Events will go into a <b>collective calendar</b>. This way you will quickly have access to what will be happening in the following days, so that you don’t miss a thing.</p>

<a href="http://www.cuckoos.io/"><h3>Learn more</h3></a>

<hr />

## Getting Started
<h3>1. Clone this repository</h3>

```
$ git clone https://github.com/NestSI-21/cuckoo.git
```
##

<h3>2. Create the App on your organization's Slack workspace</h3>
<p>- Go to <a href="https://api.slack.com/" target="_blank">api.slack</a> and create a <b>new App</b> from scratch<p>
<p>- Call it <b>Cuckoo</b> and choose your workspace<p>
<img width="350" alt="Screenshot 2021-08-24 at 17 34 38" src="https://user-images.githubusercontent.com/44748017/130656117-a7f780d7-36ae-43f9-bd93-d33a7b6dc756.png">

##
  
<h3>3. Setup the App</h3>
  
<p>- Go to <i>Settings/Basic Information/App Credentials</i> and look for the following information to add to the respective files:<p>
  
In `client/.env`:
  
```
REACT_APP_SLACK_CLIENT_ID = 
```

<p>- Now, complete the file with the requested information:<p>
 
  
```
REACT_APP_SLACK_REDIRECT_URL = https://yourFrontend.com/api/v1/auth/slack
REACT_APP_API_BASE_URL = http://localhost:8000 (to run it locally)
```

##
  
In `server/.env`:
```
//found on Basic Information/App Credentials
/*-----------------------------------------*/    
SLACK_CLIENT_ID = 
SLACK_CLIENT_SECRET =
/*-----------------------------------------*/  
  
FRONTEND_HOST = https://yourFrontend.com
  
SLACK_OAUTH_TOKEN = ?
SLACK_API_TOKEN = ?
```
To get this tokens (`SLACK_OAUTH_TOKEN` and `SLACK_API_TOKEN`) you need to install the App on your workspace.
  
For that, go to <i>Settings/OAuth & Permissions</i> and follow the next steps:
  
- Add a **Redirect URL** that should be something like: 'https://yourFrontend.com/api/v1/auth/slack'
<img width="500" alt="url" src="https://user-images.githubusercontent.com/44748017/130781324-b4148ffd-8141-44cf-af58-36691433d4f3.png">

- Insert the **Bot and User Token Scopes** specified below:
<img width="750" alt="url" src="https://user-images.githubusercontent.com/44748017/130781370-60833c0c-f6ed-4f97-a402-ff5393869e1a.png">

- **Install the App** on your Workspace by pressing the button
<img width="500" alt="install" src="https://user-images.githubusercontent.com/44748017/130781610-2c9984cf-2b53-489a-95fe-65ca4c80e264.png">

Now you can past the generated tokens to the file `server/.env`:
  
```
SLACK_OAUTH_TOKEN = User OAuth Token
SLACK_API_TOKEN = Bot User OAuth Token
```  
  
##
  
<h3>4. Run the project</h3>  
- Open cuckoo directory on terminal

- Setup
  `docker-compose build`

- Run App
  `docker-compose up`

- Update Gemfile with new gems and install those gems
  `docker-compose build`



