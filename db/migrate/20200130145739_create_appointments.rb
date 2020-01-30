class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :first_name
      t.string :last_name
      t.integer :phone1
      t.integer :phone2
      t.integer :phone3
      t.string :email
      t.string :company
      t.datetime :date
      t.time :time
      t.string :message

      t.timestamps
    end
  end
end
