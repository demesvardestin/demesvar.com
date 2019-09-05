module ApplicationHelper
    def all_categories
        Category.all.order('name ASC')
    end
    
    def project_categories
        ["coding", "research", "misc"]
    end
    
    def all_projects
        Project.all
    end
end
