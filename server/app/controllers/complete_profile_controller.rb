# frozen_string_literal: true

class CompleteProfileController < ActionController::API
  before_action :authenticate_user!

  def update
    if current_user.update(profile_params)
      render json: { message: 'The request was successful' }, status: :ok
    else
      render json: { message: 'An error has occurred, the information was not updated!' }, status: :unprocessable_entity
    end
  end
  def profile_params
    params
      .require(:user)
      .permit(:company_role, :company_id, :birthday)
      .tap do |p|
        p[:profile_completed] = true
      end
  end

end