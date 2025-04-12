class FeedbacksController < ApplicationController

    def index
        @feedbacks = Feedback.all
        render json: @feedbacks
    end

    def show
        render json: {
      id: @feedback.id,
      message: @feedback.message,
      author: {
        id: @feedback.author.id,
        name: @feedback.author.name
      },
      recipient: {
        id: @feedback.recipient.id,
        name: @feedback.recipient.name
      },
      created_at: @feedback.created_at
    }
    end

    def create
        @feedback = Feedback.new(feedback_params)
        if @feedback.save
            render json: @feedback, status: :created
        else
            render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity    
        end
    end

    def update
        @feedback = Feedback.find(params[:id])
        if @feedback.update(feedback_params)
            render json: @feedback
        else
            render json: { errors: @feedback.errors.full_messages }, status: :unprocessable_entity    
        end
    end
    def destroy
        @feedback = Feedback.find(params[:id])
        @feedback.destroy
        head :no_content
    end
    private
    def set_feedback
        @feedback = Feedback.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: "Feedback not found" }, status: :not_found
      end
    
      def feedback_params
        params.require(:feedback).permit(:message, :author_id, :recipient_id)
      end
    
end
