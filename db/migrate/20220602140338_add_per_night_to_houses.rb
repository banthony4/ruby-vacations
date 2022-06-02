class AddPerNightToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :per_night, :string
  end
end
