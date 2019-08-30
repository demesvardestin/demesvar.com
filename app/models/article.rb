class Article < ApplicationRecord
    belongs_to :category
    
    def slug
        title.split(' ').join('-')
    end
    
    def fake_title
        Faker::Lorem.sentence(word_count: 7, supplemental: true, random_words_to_add: 6)
    end
    
    def fake_body
        Faker::Lorem.paragraph(sentence_count: 38)
    end
end
