class SongsController < ApplicationController

    def index 
        songs = Song.all
        render json: {songs: songs}
    end
    def create 
    

     song =  Song.create(
         name: params[:name],
         song_hash: params[:song_hash],
         user_id: params[:user_id]
     )

    render json: {song: song}
    end


    def show 
        song = Song.find_by(params[:id] === user_id)
        render json: {song: song}
    end



end
