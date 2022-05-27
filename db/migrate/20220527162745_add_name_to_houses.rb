class AddNameToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :name, :string
  end
end
