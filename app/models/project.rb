class Project < ApplicationRecord
    belongs_to :admin
    has_many :articles
    
    def slug
        name.split(' ').join('-')
    end
    
    def form_action
        if new_record?
            "/project/projects"
        else
            "/project/projects/:id"
        end
    end
    
    def each_tag
        for tag in tags.split(',')
            yield tag
        end
    end
    
    def featured_article
        articles.first
    end
    
    def related_posts
        articles.where.not(id: featured_article.id)
    end
    
    def self.find_by_slug(slug)
        _name_ = slug.split('-').join(' ')
        return self.find_by(name: _name_)
    end
end
