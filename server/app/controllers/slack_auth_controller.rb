require 'rest-client'

class SlackAuthController <  ActionController::API
  # before_action :authenticate_user!
  def create 
    payload = {
      code: params[:code],
      client_id: "6615268295.2272567825572",
      client_secret: "d380d2e7afbff131379e2556a0c4bfc3",
      redirect_uri: "https://4068efe5a5f8.ngrok.io/api/v1/auth/slack",
      refresh_token: "xoxp-6615268295-2216501939842-2306065222960-226d063dfe5a944210745a4bb1698a09"
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

    User.find_or_create_by(provider: "slack",uid: body["authed_user"]["id"]) do |user|
      user.name = profile_body["profile"]["display_name"]
      user.uid = body["authed_user"]["id"]
      user.email = profile_body["profile"]["email"]
      user.image_url = profile_body["profile"]["image_original"]
      user.password = Devise.friendly_token[0,20]
    end

    @user = User.find_by(uid: body["authed_user"]["id"])
    if @user 
      render json: { id: @user.id }, status: :ok
      sign_in @user
    else
      render json: { message: "There was an error!"}, status: :unauthorized 
    end 
    
  
  end
end