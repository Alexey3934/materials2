class Frame1Controller < ApplicationController
      
 
    
        def show1
###############       
            

            # arr = Category.where(parent_id: 0..1000)
            # arr2 = []
            # arr.each do |el|
            #     arr2.push(el.id)
            # end


            # name = 'К3а3те3го3рия3'
            # leve = 'уровня'
            # i = 0
            # arr1 = Category.all
            # arr2 = []
            # arr1.each do |el|
            #     arr2.push(el.id)
            # end


            # 150.times do
            #     j = arr2[i]
            #     qqq = name + leve + i.to_s;
            #     Category.create(name:qqq, parent_id:j);
            #     i = i + 1
            # end



            categories = Category.where(parent_id: nil).order(:name)
            @column1 = []
            @column2 = []
            @column3 = []
            categories.each_with_index do |category, index|
                case index % 3
                when 0
                    @column1.push(category)
                when 1
                    @column2.push(category)
                when 2
                    @column3.push(category)
                end


                # render json: @column1



        end
################
        def show2
           
          
            active_category1 = Category.find_by(name:params[:subcategory1])
            @active_category1_name = active_category1.name
            @categories_L2 = Category.where("parent_id= #{active_category1.id}")

            @current_param = params[:subcategory1].to_s
        end
################
        def show3
            current_category_L1 = Category.find_by(name:params[:subcategory1])
            @current_category_L1 = current_category_L1.name

            current_category_L2 = Category.find_by(name:params[:subcategory2])
            @current_category_L2 = current_category_L2.name
          
            current_category_parent_id_l2 = current_category_L2.id
            @categories_L3 = Category.where(parent_id: current_category_parent_id_l2)

        end
################
        def show4
            @subcategory1_name = params[:subcategory1]
            @subcategory2_name = params[:subcategory2]
            @subcategory3_name = params[:subcategory3]
        end
################
    end
end
