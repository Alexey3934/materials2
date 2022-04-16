class Frame1Controller < ApplicationController
      
    
    name = 'категория'
        
    Category.create(name:name, parent_id:nil );
        
    
        def show
###############       
            
            # name = 'suba1aalel2'
            # i = 0


            # 50.times do
            #     qqq = name + i.to_s;
            #     Category.create(name:qqq, parent_id:i);
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


            



        end
################
        def show2
            current_category_L1 = Category.find_by(name:params[:category])
            @current_category_L1 = current_category_L1.name
            @test = current_category_L1.id
            @categories_L2 = Category.where("parent_id= #{@test}")
        end
################
        def show3

        end
################
    end
end
