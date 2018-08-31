class QuotesController < ApplicationController
  skip_before_action :authorize_request, only: :random_quote
  before_action :set_source, except: [:random_quote]
  before_action :set_source_quote, only: [:show, :update, :destroy]

  # GET /sources/:source_id/quotes
  def index
    json_response(@source.quotes)
  end

  # GET /sources/:source_id/quotes/:id
  def show
    json_response(@quote)
  end

  # POST /sources/:source_id/quotes
  def create
    @source.quotes.create!(quote_params)
    json_response(@source, :created)
  end

  # PUT /sources/:source_id/quotes/:id
  def update
    @quote.update(quote_params)
    head :no_content
  end

  # DELETE /sources/:source_id/quotes/:id
  def destroy
    @quote.destroy
    head :no_content
  end

  # GET /random/quote
  def random_quote
    # mysql
    quote = Quote.limit(1).order(Arel.sql('RAND()'))
    json_response(quote)
  end

  private

  def quote_params
    params.permit(:quote)
  end

  def set_source
    @source = Source.find(params[:source_id])
  end

  def set_source_quote
    @quote = @source.quotes.find_by!(id: params[:id]) if @source
  end
end
