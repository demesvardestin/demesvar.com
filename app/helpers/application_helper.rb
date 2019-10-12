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
    
    def page_title(path)
        path_map = if path.length < 2
            [""]
        elsif path.include?("article")
            [] << path.split("blog/article/")[1].split("-").join(" ") <<  " - "
        else
            path.split("/") << " - "
        end.map(&:downcase).join(" ") << "demesvar.com"
        
        return path_map
    end
    
    def external_prototype_url(name)
        case name
        when 'dinnerhost'
            'dinner-host'
        when 'driprent'
            'rentmydrip'
        else
            name
        end
    end
end
