ActiveAdmin.register Post do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :user_id, :type_id, :title, :location, :description, :start_date, :end_date, :start_time, :end_time, :category_id
  #
  # or
  #
  # permit_params do
  #   permitted = [:user_id, :type_id, :title, :location, :description, :start_date, :end_date, :start_time, :end_time, :category_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
