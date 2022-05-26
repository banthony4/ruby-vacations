class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :location
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
