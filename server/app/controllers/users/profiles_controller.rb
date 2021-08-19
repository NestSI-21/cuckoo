# frozen_string_literal: true

module Users
  class ProfilesController < ActionController::API
    before_action :authenticate_user!

    def show
      render(
        json: UserSerializer.new(
          current_user,
          { include: [:company] }
        )
      )
    end

    def update
      if current_user.update(profile_params)
        render(
          json: UserSerializer.new(
            current_user,
            { include: [:company] }
          )
        )
      else
        render json: { message: 'An error has occurred, the information was not updated!' },
               status: :unprocessable_entity
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
end
