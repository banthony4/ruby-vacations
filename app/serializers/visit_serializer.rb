class VisitSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :house_id, :user_id
end
