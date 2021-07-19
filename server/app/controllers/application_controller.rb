class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session

    def after_sign_in_path_for(resource)
        request.env['omniauth.origin'] || root_path
    end
    
end
