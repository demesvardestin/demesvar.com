class Article < ApplicationRecord
    belongs_to :category
    belongs_to :project
    has_many :comments
    
    def slug
        title.split(' ').join('-')
    end
    
    def fake_title
        Faker::Lorem.sentence(word_count: 7, supplemental: true, random_words_to_add: 6)
    end
    
    def fake_body
        Faker::Lorem.paragraph(sentence_count: 38)
    end
    
    def article_tags
        tags.split(",").join(" ")
    end
    
    def self.filter_by_category(category)
        Article.all.select do |a|
            a.category.name == category
        end
    end
end
