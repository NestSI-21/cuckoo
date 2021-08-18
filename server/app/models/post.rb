# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  belongs_to :type
  belongs_to :category
  has_many_attached :images
  scope :filter_by_categories, ->(category) { joins(:category).where(category: { id: category }).distinct }
  scope :filter_by_types, ->(type) { joins(:type).where(type: { id: type }).distinct }


  #filter by category and type or just one of them


  def send_message
    Slack.configure do |config|
      config.token = ENV['SLACK_OAUTH_TOKEN']
      raise 'Missing ENV[SLACK_OAUTH_TOKEN]!' unless config.token
    end

    client = Slack::Web::Client.new

    client.auth_test

    category = Category.find(category_id)

    # Format the message that will be sent to slack
    slack_cuckoo = "#{title}\n\n#{description}\n\n"

    slack_cuckoo += "📍 At: #{location}\n" if location != ''

    if start_date
      slack_cuckoo += "🗓 From: #{start_date.strftime('%d:%m:%Y')}"
      # Posts that are created on the current day or before wont have a reminder
      if start_date > DateTime.current.to_date
        reminder_day = start_date - 1.day # The reminder is currently set to one day before the start date
        reminder_date_time = reminder_day.change(hour: ENV['SLACK_SCHEDULED_HOURS'], min: ENV['SLACK_SCHEDULED_MINUTES'])
        byebug
        reminder_date_time = reminder_date_time.to_time.to_i
      end
    end

    slack_cuckoo += ", #{start_date.strftime('%H:%M')}" if start_date
    slack_cuckoo += +"\n🔚 To: " + end_date.strftime('%d:%m:%Y') if end_date

    slack_cuckoo += ", #{end_date.strftime('%H:%M')}" if end_date

    # Sends the schedule message if there is a start date
    if start_date and start_date > DateTime.current.to_date
      client.chat_scheduleMessage(channel: category.slack_channel, text: slack_cuckoo, post_at: reminder_date_time)
    end
    # Normal slack message sent when a post is created
    client.chat_postMessage(channel: category.slack_channel, text: slack_cuckoo, as_user: true)
  end


  def images_url
    Rails.application.routes.default_url_options = { host: 'localhost:3000', protocol: 'http' }
    images.map do |image|
      Rails.application.routes.url_helpers.url_for(image)
    end
  end
end
