class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :caption
      t.float :longitude
      t.string :latitude
      t.string :float
      t.references :user, null: false, foreign_key: true
      t.boolean :allow_comments
      t.string :show_likes_count
      t.string :boolean

      t.timestamps
    end
  end
end
