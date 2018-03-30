class CreateLoginStatuses < ActiveRecord::Migration[5.0]
  def change
    create_table :login_statuses do |t|
      t.integer :status_code
      t.integer :time

      t.timestamps
    end
  end
end
