class Song < ApplicationRecord
  belongs_to :user

  PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS/"

  def self.post_pinata(file)

    api_response = Unirest.post(
      PINATA_URL,
      headers: { 
        'pinata_api_key'=>'ccee3b7419ae2534ea00' ,
        'pinata_secret_api_key'=>'aa238db96c0d90daff78d621ef1c624190e74522d3c1c9418fca95fbfe28bbe4'
        },       
       parameters: {:file => file}       
    )
    return JSON.parse(api_response.raw_body)
  end
end
