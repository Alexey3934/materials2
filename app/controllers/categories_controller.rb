class CategoriesController < ApplicationController
  def index
  end

  def qqq
    @materials = Material.all.order(:description)
    render json: @materials

end

def get_categories
    categories_all = Category.all
    
    categories_first_level = Category.where(parent_id:nil)
    categories_second_and_third_level = Category.where.not(parent_id:nil)
    categories_first_level_id = []
    categories_first_level.each do |el|
        categories_first_level_id.push(el.id)
    end

    categories_second_level = []
    categories_first_level_id.each do |id|
        categories_second_and_third_level.each do |el|
            if (el.parent_id == id)
                categories_second_level.push(el)
            end
        end
    end

    
    categories_third_level = [] 
    categories_second_and_third_level.each do |item| 
        if !(categories_second_level.include? item) 
            categories_third_level.push(item)
        
        end
    end
    @categories = [categories_first_level.order(:name), categories_second_level, categories_third_level, categories_all]
    render json: @categories
  end
end
