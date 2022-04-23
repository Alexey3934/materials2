class MaterialsController < ApplicationController
  

    def qqq 
    end

    def new
      @material = Material.new
    end   

    def create
      # @material  = Material.new(material_params)
      @material  = Material.new

      if @material.save
        redirect_to '/'
      else
        redirect_to :qqq

      end
    end
    
      # private
      #   def material_params
      #     params.require(:materials).permit(:description, :unit, :price_retail, :price_wholesale, :amount_wholesale, :category, :place, :company, :phone, :days_left)
      #   end
    
    
         
end
