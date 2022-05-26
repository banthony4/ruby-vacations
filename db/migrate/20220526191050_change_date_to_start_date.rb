class ChangeDateToStartDate < ActiveRecord::Migration[6.1]
  def change
    rename_column :visits, :date, :start_date
  end
end
