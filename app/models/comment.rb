class Comment < ApplicationRecord
    belongs_to :commentable, dependent: :destroy
    
    def self.get_model(path)
        namespaces = ["blog"]
        
        path.split("/").select do |word|
            next if namespaces.include? word  # avoid returning a namespace
            
            begin
                model = word.singularize.camelize.constantize.to_s
                return model
            rescue
                nil
            end
        end
    end
end
