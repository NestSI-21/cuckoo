# frozen_string_literal: true

class CompleteProfileController < ActionController::API
  before_action :authenticate_user!

  def update
    if current_user.update(profile_params)
      current_user.profile_flag = true
      render json: { message: 'The request was successful' }, status: :ok
    else
      render json: { message: 'An error has occurred, the information was not updated!' }, status: :unauthorized
    end
  end

  def profile_params
    params.require(:user).permit(:role, :company_id, :date_of_birth)
  end
end
