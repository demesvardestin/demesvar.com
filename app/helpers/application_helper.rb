module ApplicationHelper
    def all_categories
        ["sports", "religion", "politics", "philosophy", "technology",
            "economics", "all"].sort
    end
    
    def project_categories
        ["coding", "research", "misc"]
    end
    
    def all_projects
        Project.all
    end
end
