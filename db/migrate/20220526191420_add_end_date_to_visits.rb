class AddEndDateToVisits < ActiveRecord::Migration[6.1]
  def change
    add_column :visits, :end_date, :string, after: :start_date
  end
end
