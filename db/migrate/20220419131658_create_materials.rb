class CreateMaterials < ActiveRecord::Migration[7.0]
  def change
    create_table :materials do |t|
      t.string :description
      t.string :unit
      t.integer :price_retail
      t.integer :price_wholesale
      t.integer :amount_wholesale
      t.string :category
      t.string :place
      t.string :company
      t.integer :days_left

      t.timestamps
    end
  end
end
