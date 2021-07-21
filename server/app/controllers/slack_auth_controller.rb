require 'rest-client'

class SlackAuthController <  ActionController::API
  # before_action :authenticate_user!
  def create 
    payload = {
      code: params[:code],
      client_id: ENV['SLACK_CLIENT_ID'],
      client_secret: ENV['SLACK_CLIENT_SECRET'],
      redirect_uri: "#{ENV["FRONTEND_HOST"]}/api/v1/auth/slack",
      refresh_token: ENV['SLACK_OAUTH_TOKEN']
    }
    

    response = RestClient.post("https://slack.com/api/oauth.v2.access",payload)
    body = JSON.parse(response.body)

    profile_payload = {
      user: body["authed_user"]["id"],
      token: body["authed_user"]["access_token"]

    }

    profile_response = RestClient.get("https://slack.com/api/users.profile.get?user=#{body["authed_user"]["id"]}", headers = {Authorization: "Bearer #{body["authed_user"]["access_token"]}"})

    profile_body = JSON.parse(profile_response.body)

    # byebug

    @user = User.find_or_create_by(provider: "slack",uid: body["authed_user"]["id"]) do |user|
      user.name = profile_body["profile"]["display_name"]
      user.uid = body["authed_user"]["id"]
      user.email = profile_body["profile"]["email"]
      user.image_url = profile_body["profile"]["image_original"]
      user.password = Devise.friendly_token[0,20]
    end

    if @user 
      sign_in @user
      render json: { id: @user.id }, status: :ok
    else
    rescue
      render json: { message: "There was an error!"}, status: :unauthorized 
    end 
    
  
  end
end