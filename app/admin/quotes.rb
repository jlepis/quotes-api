ActiveAdmin.register Quote do
  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  permit_params :quote, :author, :source_id
  #
  # or
  #
  permit_params do
    permitted = [:permitted, :attributes]
    permitted << :other if params[:action] == 'create' && current_admin_user
    permitted
  end

  controller do
    def permitted_params
    ##allows all attributes to be edited
     params.permit!
    end
  end

end
