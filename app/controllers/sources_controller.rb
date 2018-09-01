class SourcesController < ApiController
  before_action :set_source, only: [:show, :update, :destroy]

  # GET /sources
  def index
    @sources = current_user.sources
    json_response(@sources)
  end

  # POST /sources
  def create
    @source = current_user.sources.create!(source_params)
    json_response(@source, :created)
  end

  # GET /sources/:id
  def show
    json_response(@source)
  end

  # PUT /sources/:id
  def update
    @source.update(source_params)
    head :no_content
  end

  # DELETE /sources/:id
  def destroy
    @source.destroy
    head :no_content
  end

  private

  def source_params
    # whitelist params
    params.permit(:title, :description)
  end

  def set_source
    @source = Source.find(params[:id])
  end
end
