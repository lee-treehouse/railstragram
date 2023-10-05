json.extract! post, :id, :caption, :longitude, :latitude, :float, :user_id, :allow_comments, :show_likes_count, :boolean, :created_at, :updated_at
json.url post_url(post, format: :json)
