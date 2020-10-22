class Series < ApplicationRecord
    has_many :articles
    belongs_to :admin
    scope :live, -> { where(live: true) }
    
    before_create :generate_slug
    before_create :set_live
    
    def _slug
        name.split(" ").map do |w|
            w[0].upcase
        end.join
    end
    
    protected
    
    def generate_slug
        self.slug = _slug
    end
    
    def set_live
        self.live = true
    end
end
