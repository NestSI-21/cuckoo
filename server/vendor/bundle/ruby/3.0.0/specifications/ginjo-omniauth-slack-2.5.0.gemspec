# -*- encoding: utf-8 -*-
# stub: ginjo-omniauth-slack 2.5.0 ruby lib

Gem::Specification.new do |s|
  s.name = "ginjo-omniauth-slack".freeze
  s.version = "2.5.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["kimura".freeze, "ginjo".freeze]
  s.date = "2020-06-17"
  s.description = "OmniAuth strategy for Slack".freeze
  s.email = ["kimura@enigmo.co.jp".freeze, "wbr@mac.com".freeze]
  s.homepage = "https://github.com/ginjo/omniauth-slack.git".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.15".freeze
  s.summary = "OmniAuth strategy for Slack, based on OAuth2 and OmniAuth".freeze

  s.installed_by_version = "3.2.15" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<omniauth-oauth2>.freeze, [">= 1.4.0"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 1.11.2"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_development_dependency(%q<mocha>.freeze, [">= 0"])
  else
    s.add_dependency(%q<omniauth-oauth2>.freeze, [">= 1.4.0"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.11.2"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<minitest>.freeze, [">= 0"])
    s.add_dependency(%q<mocha>.freeze, [">= 0"])
  end
end
