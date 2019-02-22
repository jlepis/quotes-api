require 'rails_helper'

RSpec.describe 'sources API', type: :request do
  # initialize test data
  let(:user) { create(:user) }
  let!(:sources) { create_list(:source, 10, created_by: user.id) }
  let(:source_id) { sources.first.id }
  # authorize request
  let(:headers) { valid_headers }

  # Test suite for GET /api/sources
  describe 'GET /api/sources' do
    # make HTTP get request before each example
    before { get '/api/sources', params: {}, headers: headers }

    it 'returns sources' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /api/sources/:id
  describe 'GET /api/sources/:id' do
    before { get "/api/sources/#{source_id}", params: {}, headers: headers  }

    context 'when the record exists' do
      it 'returns the source' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(source_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:source_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Source/)
      end
    end
  end

  # Test suite for POST /api/sources
  describe 'POST /api/sources' do
    # valid payload
    let(:valid_attributes) do
      # send json payload
      { title: 'Learn Elm', created_by: user.id.to_s }.to_json
    end

    context 'when the request is valid' do
      before { post '/api/sources', params: valid_attributes, headers: headers }

      it 'creates a source' do
        expect(json['title']).to eq('Learn Elm')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      let(:invalid_attributes) { { title: nil }.to_json }
      before { post '/api/sources', params: invalid_attributes, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to match(/Validation failed: Title can't be blank/)
      end
    end
  end

  # Test suite for PUT /api/sources/:id
  describe 'PUT /api/sources/:id' do
    let(:valid_attributes) { { title: 'Shopping' }.to_json }

    context 'when the record exists' do
      before { put "/api/sources/#{source_id}", params: valid_attributes, headers: headers }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /api/sources/:id
  describe 'DELETE /api/sources/:id' do
    before { delete "/api/sources/#{source_id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
