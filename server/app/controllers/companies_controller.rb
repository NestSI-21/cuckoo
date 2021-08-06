class CompaniesController < ActionController::API
    before_action :authenticate_user!
  
    def index
      @companies = Company.all
      render json: { companies: @companies }, status: :ok
    end
end