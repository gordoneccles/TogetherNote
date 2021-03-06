class Note < ApplicationRecord
    has_many :notebook_notes, inverse_of: :note
    has_many :notebooks, through: :notebook_notes
    has_many :taggings, dependent: :destroy, inverse_of: :note
    has_many :tags, through: :taggings

    def all_users
      self.notebooks.includes(:user).map{ |nb| nb.user }.flatten
    end

    def plain_text_body
      ActionView::Base.full_sanitizer.sanitize(self.body).to_s
    end

    def tags_hash
      tags_hash = {}

      self.tags.each do |tag|
        id = tag.id
        tags_hash[id] = {
                          id: id,
                          name: tag.name
                        }
      end

      tags_hash
    end

    def self.hashify(notes_array)
      notesHash = {}

      notes_array.each do |note|
        id = note.id
        notesHash[id] =   {
                            id: id,
                            title: note.title,
                            body: note.plain_text_body
                          }
      end

      notesHash
    end

end
