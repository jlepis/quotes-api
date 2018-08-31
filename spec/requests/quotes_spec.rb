require 'rails_helper'

RSpec.describe 'Quotes API' do
  # Initialize the test data
  let(:user) { create(:user) }
  let!(:source) { create(:source, created_by: user.id) }
  let!(:quotes) { create_list(:quote, 20, source_id: source.id) }
  let(:source_id) { source.id }
  let(:id) { quotes.first.id }
  let(:headers) { valid_headers }


  # Test suite for GET /sources/:source_id/quotes
  describe 'GET /sources/:source_id/quotes' do
    before { get "/sources/#{source_id}/quotes", params: {}, headers: headers }

    context 'when source exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all source quotes' do
        expect(json.size).to eq(20)
      end
    end

    context 'when source does not exist' do
      let(:source_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Source/)
      end
    end
  end

  # Test suite for GET /sources/:source_id/quotes/:id
  describe 'GET /sources/:source_id/quotes/:id' do
    before { get "/sources/#{source_id}/quotes/#{id}", params: {}, headers: headers }

    context 'when source quote exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the quote' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when source quote does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Quote/)
      end
    end
  end

  # Test suite for PUT /sources/:source_id/quotes
  describe 'POST /sources/:source_id/quotes' do
    let(:valid_attributes) { { quote: 'Visit Narnia', author: "Dr. Seuss" }.to_json }

    context 'when request attributes are valid' do
      before do
        post "/sources/#{source_id}/quotes", params: valid_attributes, headers: headers
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/sources/#{source_id}/quotes", params: {}, headers: headers }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Quote can't be blank/)
      end
    end
  end

  # Test suite for PUT /sources/:source_id/quotes/:id
  describe 'PUT /sources/:source_id/quotes/:id' do
    let(:valid_attributes) { { quote: 'Mozart' }.to_json }

    before do
      put "/sources/#{source_id}/quotes/#{id}", params: valid_attributes, headers: headers
    end

    context 'when quote exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the item' do
        updated_quote = Quote.find(id)
        expect(updated_quote.quote).to match(/Mozart/)
      end
    end

    context 'when the quote does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Quote/)
      end
    end
  end

  # Test suite for DELETE /sources/:id
  describe 'DELETE /sources/:id' do
    before { delete "/sources/#{source_id}/quotes/#{id}", params: {}, headers: headers }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end

  # Test suit for random /random/quotes
  describe 'GET /random/quote' do
    before { get '/random/quote' }

    context 'when random quote exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
      it 'returns a single quote' do
        expect(json.size).to eq(1)
      end
    end
  end
end
