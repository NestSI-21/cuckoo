# frozen_string_literal: true

class CompleteProfileController < ActionController::API
  before_action :authenticate_user!

  def update
    if current_user.update(profile_params)
      @company = Company.find(current_user.company_id)
      render json: { message: 'The request was successful', user: current_user, user_company_name: @company.name },
             status: :ok
    else
      render json: { message: 'An error has occurred, the information was not updated!' }, status: :unprocessable_entity
    end
  end

  private

  def profile_params
    params
      .require(:user)
      .permit(:company_role, :company_id, :birthday)
      .tap do |p|
        p[:profile_completed] = true
      end
  end
end
