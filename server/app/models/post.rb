# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  belongs_to :type
  has_many_attached :images
  before_save :send_message

  def send_message(post)

    if post.save
      Slack.configure do |config|
        config.token = ENV['SLACK_OAUTH_TOKEN']
        raise 'Missing ENV[SLACK_OAUTH_TOKEN]!' unless config.token
      end

      client = Slack::Web::Client.new

      client.auth_test

      category = Category.find(post.category_id)

      # Format the message that will be sent to slack
      slack_cuckoo = "#{post.title}\n\n#{post.description}\n\n"

      slack_cuckoo += "📍 At: #{post.location}\n" if post.location != ''

      if post.start_date
        slack_cuckoo += "🗓 From: #{post.start_date.strftime('%d:%m:%Y')}"
        # Posts that are created on the current day or before wont have a reminder
        if post.start_date > DateTime.current.to_date
          reminder_day = post.start_date - 1.day # The reminder is currently set to one day before the start date
          reminder_time = ENV['SLACK_SCHEDULED_TIME'] # The reminder will always be at this hour - Server runs on a different time zone 1 hour earlier
          reminder_date_time = DateTime.parse([reminder_day, reminder_time].join(' '))
          reminder_date_time = reminder_date_time.to_time.to_i
        end
      end

      slack_cuckoo += ", #{post.start_time.strftime('%H:%M')}" if post.start_time
      slack_cuckoo += +"\n🔚 To: " + post.end_date.strftime('%d:%m:%Y') if post.end_date

      slack_cuckoo += ", #{post.end_time.strftime('%H:%M')}" if post.end_time

      # Sends the schedule message if there is a start date
      if post.start_date > DateTime.current.to_date
        client.chat_scheduleMessage(channel: category.slack_channel, text: slack_cuckoo, post_at: reminder_date_time)
      end
      # Normal slack message sent when a post is created
      client.chat_postMessage(channel: category.slack_channel, text: slack_cuckoo, as_user: true)
    end
  end

  def images_url
    Rails.application.routes.default_url_options = { host: 'localhost:3000', protocol: 'http' }
    images.map do |image|
      Rails.application.routes.url_helpers.url_for(image)
    end
  end
end
