class Project < ApplicationRecord
    belongs_to :admin
    validates_uniqueness_of :name
    
    after_create { Commentable.create(object_id: id, object_type: self.class.name) }
    
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
    
    def self.categorized_by(category)
        where("category LIKE '%#{category}%'")
    end
    
    def commentable
        Commentable.find_by(object_id: id, object_type: self.class.name)
    end
    
    def comments
        commentable.comments
    end
    
    def articles
        Article.where(project_id: id)
    end
end
