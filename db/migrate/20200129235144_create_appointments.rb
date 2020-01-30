class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone
      t.string :company
      t.datetime :date
      t.time :time
      t.string :message

      t.timestamps
    end
  end
end
