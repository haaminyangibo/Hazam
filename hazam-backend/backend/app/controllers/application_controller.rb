class ApplicationController < ActionController::API
    def get_current_user
        id = decode_token['id']
        return User.find_by(id: id)
    end
    
    def decode_token
        begin
          JWT.decode(token, secret).first
        rescue
          {}
        end
    end
    
    def token
        request.headers['Authorization']
    end

    def secret 
       ENV["SECRET"]
    end
    
    def issue_token(id)
        JWT.encode(id, secret)
    end
end
