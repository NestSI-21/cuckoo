class ChangeLogoToCompanyUrl < ActiveRecord::Migration[6.1]
  def change
    rename_column :companies, :logo, :company_url
  end
end
