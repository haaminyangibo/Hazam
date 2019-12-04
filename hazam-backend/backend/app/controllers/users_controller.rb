class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def create 
         User.create(user_params)
         if user.valid? 
            user.save
            token = issue_token(id: user.id)
            render json: { name: user.name, token: token }
        else
            render json: { error:  'User details not valid' }
        end
      
    end

    def show 
# byebug
        user = User.find(params[:id])
        render json: {user: user, songs: user.songs}
    end 


    def signin
        # byebug
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            # byebug
            
            token = issue_token({id: user.id})
        
            
            render json: { id: user.id, name: user.name, token: token }
        else
            render json: { error:  'Email and password combination is invalid.' }, status: 401
        end
     end

     def validate
        user = get_current_user
        if user
          render json: { id: user.id, name: user.name, token: issue_token({ id: user.id }) }
        else
          render json: { error:  'Unable to validate user.' }, status: 401
        end
    end
    private 

    def user_params

        params.require(:user).permit(:name, :email, :password)

    end


end
