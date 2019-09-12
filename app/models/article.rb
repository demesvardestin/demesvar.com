class Article < ApplicationRecord
    belongs_to :category
    belongs_to :admin
    validates_uniqueness_of :title
    
    after_create { Commentable.create(object_id: id, object_type: self.class.name) }
    
    def slug
        _title_ = title
        if _title_[-1] == '.'
            _title_ = _title_[0..-2]
        end
        _title_.split(' ').join('-')
    end
    
    def fake_title
        Faker::Lorem.sentence(word_count: 7, supplemental: true, random_words_to_add: 6)
    end
    
    def fake_body
        Faker::Lorem.paragraph(sentence_count: 38)
    end
    
    def each_tag
        for tag in tags.split(",")
            yield tag
        end
    end
    
    def self.filter_by_category(category)
        Article.all.select do |a|
            a.category.name == category
        end
    end
    
    def self.find_by_slug(slug)
        _name_ = slug.split('-').join(' ')
        return self.find_by(name: _name_)
    end
    
    def commentable
        Commentable.find_by(object_id: id, object_type: self.class.name)
    end
    
    def comments
        commentable.comments
    end
end
