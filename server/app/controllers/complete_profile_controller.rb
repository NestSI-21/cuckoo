# frozen_string_literal: true

class CompleteProfileController < ActionController::API
  before_action :authenticate_user!

  def update
    if current_user.update(profile_params)
      current_user.profile_flag = true
      current_user.save()
      render json: { message: 'The request was successful' }, status: :ok
    else
      render json: { message: 'An error has occurred, the information was not updated!' }, status: :unauthorized
    end
  end

  def profile_params
    params.require(:user).permit(:company_role, :company_id, :birthday)
  end

  def logout
    sign_out current_user 
    if !current_user
      render json: { message: 'User successfully logged out!'}, status: :ok
    else 
      render json: { message: 'There was an error!' }, status: :unauthorized
    end
  end
end
