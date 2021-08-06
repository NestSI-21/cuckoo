# frozen_string_literal: true

Type.find_or_create_by(name: 'Announcement', slack_channel: '#test')
Type.find_or_create_by(name: 'Event', slack_channel: '#test')
Company.find_or_create_by(name: 'Deemaze', description: 'This is a description', status: 'a ver', logo: 'kappa')
