# Cuckoo

![cuckoobanner](https://user-images.githubusercontent.com/44748017/130648943-eae77a6d-21e2-450b-acb6-5e7241c7e5e3.jpg)

##
<a href="https://www.producthunt.com/posts/cuckoo-5?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-cuckoo-5" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=310085&theme=light" alt="Cuckoo - Store and organize slack posts | Product Hunt" style="width: 150px;" width="150"/></a>
<hr/>

## What is Cuckoo ?

Cuckoo is an open source product directed to companies and work teams that use Slack to communicate. It focuses on storing your important Slack Posts in one place so that you don’t miss a thing. 

<br/>

<h1 align="center"><i>Keep your team in sync!</i></h1>

<h3>How it works? 🤔</h3>
<p>- With Cuckoo you can create <b>events or announcements</b> that will be published on the platform's "Cuckoos feed" where you can find all the posts previously published by other members of your organisation.</p>
<p>- These posts will also be sent to a channel on your <b>slack</b> workspace, depending on their category. A reminder will also be sent 1 day before the event starts.</p>
<p>- Events will go into a <b>collective calendar</b>. This way you can quickly have access to what will be happening in the following days, so you don’t miss a thing.</p>

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
<p>Because Slack Api requires an https connection, we recomend you to use <a href="https://ngrok.com/download">ngrok</a> in case you want run it locally</p>
  
```
REACT_APP_SLACK_REDIRECT_URL = https://example-94-61-25-158.ngrok.io/api/v1/auth/slack
REACT_APP_API_BASE_URL = http://localhost:8000 (to run it locally)
```  

  
<p>- Then, add the name of your organization<p> 
  
```
REACT_APP_ORGANIZATION_NAME = 
``` 

##
  
In `server/.env`:
```
SLACK_CLIENT_ID = 
SLACK_CLIENT_SECRET =
  
FRONTEND_HOST = https://example-94-61-25-158.ngrok.io
  
SLACK_OAUTH_TOKEN =
SLACK_API_TOKEN =
  
SLACK_SCHEDULED_HOURS = 23
SLACK_SCHEDULED_MINUTES = 59
  
CUCKOOS_URL = cuckoos.io
```
`SLACK_CLIENT_ID` and `SLACK_CLIENT_SECRET` can be found on Basic Information/App Credentials.
##
To get these tokens (`SLACK_OAUTH_TOKEN` and `SLACK_API_TOKEN`) you need to install the App on your workspace.
  
For that, go to <i>Settings/OAuth & Permissions</i> and follow the next steps:
  
- Add the **Redirect URL** (`REACT_APP_SLACK_REDIRECT_URL`)
<img width="500" alt="url" src="https://user-images.githubusercontent.com/44748017/131146665-be191d25-ab15-4230-b5e2-7320d9eee50c.png">


- Insert the **Bot and User Token Scopes** specified below:
<img width="750" alt="url" src="https://user-images.githubusercontent.com/44748017/130781370-60833c0c-f6ed-4f97-a402-ff5393869e1a.png">

- **Install the App** on your Workspace by pressing the button
<img width="500" alt="install" src="https://user-images.githubusercontent.com/44748017/130781610-2c9984cf-2b53-489a-95fe-65ca4c80e264.png">

Now you can paste the generated tokens to the file `server/.env`:
  
```
SLACK_OAUTH_TOKEN = User OAuth Token
SLACK_API_TOKEN = Bot User OAuth Token
```
  
##
  
In `server/config/initializers/cors.rb` add your fontend url to **origins**.
  
```Ruby
Rails.application.config.middleware.insert_before(0, Rack::Cors) do
  allow do
    origins 'https://example-94-61-25-158.ngrok.io'
    resource '*',
             headers: :any,
             expose: ['Authorization'],
             methods: %i[get
                         post
                         put
                         patch
                         delete
                         options
                         head]
  end
end
```  
  
##
  <h3>4. Add the bot to channels you want</h3>
  <img width="433" alt="Screenshot 2021-08-27 at 16 52 48" src="https://user-images.githubusercontent.com/44748017/131154884-a2878061-df8b-4a1c-b675-28af684ad526.png">
  

##
 
<h3>5. Run the project</h3>
<p>- Install <a href="https://docs.docker.com/get-docker/">Docker</a> on your computer</p>
<p>- Run Docker</p>
<p>- Open cuckoo directory on terminal</p>

- Run App
  `$ docker-compose up`

<hr/>

## Upcoming Features
- Reminders for events/announcements (google calendar connection).
- Using the bot to create posts inside Slack and then posting them on the platform.
- Develop delete button and visual removal of a post.
- ...

<hr/>

## License
<p>Cuckoo is licensed under <a href="https://github.com/NestSI-21/cuckoo/blob/main/LICENSE">MIT</a>. Refer to LICENSE.txt for more information.</p>


