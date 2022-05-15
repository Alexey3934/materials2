class MaterialsController < ApplicationController
  def new
    # @material = Material.new
  end   


  def create
    # @material = Material.new(material_params)
    
    is_new_category = true
    Category.all.each do |el|
      if (el[:name] == params[:category_name])
         is_new_category = false
      end
    end


    if (is_new_category)
      parent_id = 0
      if params[:level_input] == "level1"
        parent_id = nil
      elsif params[:level_input] == "level2"
        parent_element = Category.find_by(name:params[:first_element_name])
        parent_id = parent_element.id
      elsif params[:level_input] == "level3"
        parent_element = Category.find_by(name:params[:second_element_name])
        parent_id = parent_element.id
      end

      Category.create(name: params[:category_name], parent_id: parent_id)
    end



    current_category = Category.find_by(name:params[:category_name])


    # first_category = Category.find(1)
    material  = Material.create(
      description: params[:description],
      unit: params[:unit],
      price_retail: params[:price_retail],
      price_wholesale: params[:price_wholesale],
      amount_wholesale: params[:amount_wholesale],
      category_id:current_category.id,
      place: params[:place],
      company: params[:company],
      phone: params[:phone]
    )
    
    
    
    
    
    
    if material.save
      # redirect_to "/", data: {turbo_method: :get}
      redirect_to root_path
      #  data: { turbolinks: false }
      # data: { turbo: false }
      # , no_turbolink: true
    else
      render :new
      # , status: :unprocessable_entity

    end
  end
  
  # private

  # def material_params
  #   params.require(:material).permit(:description, :unit,
  #      :price_retail, :price_wholesale, :amount_wholesale,
  #       :category, :place, :company, :phone)
  # end
end
