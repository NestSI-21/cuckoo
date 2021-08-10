# frozen_string_literal: true

Type.find_or_create_by(name: 'Announcement')
Type.find_or_create_by(name: 'Event')
Company.find_or_create_by(name: 'Assure Hedge',
                          description: 'Assure Hedge offers reliable currency hedging solutions to FX brokers, banks and payment entities which easily integrates into their product suite', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Bloco',
                          description: 'We are a small and independent studio specialised in designing and developing Android products.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Deemaze', description: 'Software agency building digital products and services.',
                          status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Fidizzi',
                          description: 'We deliver full-cycle Salesforce professional services to help organisations embrace the world’s leading CRM platform.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Fucking Amazing',
                          description: 'Para nós o marketing e a comunicação não têm tabus, ou então não seríamos Fucking Amazing!', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Good Barber',
                          description: 'GoodBarber is an App Builder. A no-code platform to make high-performing native apps and Progressive Web Apps.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Grama',
                          description: 'Sofware house from Coimbra, Portugal. Our focus is software development, UI/​UX, technical design, quality assurance and project management.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Pink Room',
                          description: 'Delivering your Android and iOS mobile apps faster and more cost-effectively.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'psand',
                          description: 'Specialists in bespoke content management systems that provide rock solid hosting & rock star support.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'RedLight',
                          description: 'We are a software development studio focusing on seamless communication and process transparency.', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'srgsoftware.io',
                          description: '"No-shore" custom software development - on-shore quality with off-shore discounted rates with 30+ years of experience!', status: 'a ver', logo: 'kappa')
Company.find_or_create_by(name: 'Versatil', description: 'A tua equipa de IT personalizada.', status: 'a ver',
                          logo: 'kappa')
Category.find_or_create_by(type_id: 1, name: 'Alert', slack_channel: '#alert')
Category.find_or_create_by(type_id: 1, name: 'New Company', slack_channel: '#alerts')
Category.find_or_create_by(type_id: 1, name: 'New Employee', slack_channel: '#alerts')
Category.find_or_create_by(type_id: 1, name: 'Other', slack_channel: '#alerts')
Category.find_or_create_by(type_id: 2, name: 'Education', slack_channel: '#education')
Category.find_or_create_by(type_id: 2, name: 'Social', slack_channel: '#social')
Category.find_or_create_by(type_id: 2, name: 'Other', slack_channel: '#other')
