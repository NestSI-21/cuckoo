# frozen_string_literal: true

class CompaniesController < ActionController::API
  before_action :authenticate_user!

  def index
    @companies = Company.all
    render(
      json: CompanySerializer.new(
         @companies
      )
  end
end
