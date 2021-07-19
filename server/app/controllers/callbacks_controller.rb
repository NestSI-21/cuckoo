class CallbacksController < Devise::OmniauthCallbacksController
    skip_before_action :verify_authenticity_token, only: :slack
    def slack
        @user = User.from_omniauth(request.env['omniauth.auth'])
        sign_in_and_redirect @user 
    end
    
    
end 