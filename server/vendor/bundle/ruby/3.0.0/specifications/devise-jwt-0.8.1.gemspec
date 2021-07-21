# -*- encoding: utf-8 -*-
# stub: devise-jwt 0.8.1 ruby lib

Gem::Specification.new do |s|
  s.name = "devise-jwt".freeze
  s.version = "0.8.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Marc Busqu\u00E9".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-02-14"
  s.description = "JWT authentication for devise with configurable token revocation strategies".freeze
  s.email = ["marc@lamarciana.com".freeze]
  s.homepage = "https://github.com/waiting-for-dev/devise-jwt".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.2.15".freeze
  s.summary = "JWT authentication for devise".freeze

  s.installed_by_version = "3.2.15" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<devise>.freeze, ["~> 4.0"])
    s.add_runtime_dependency(%q<warden-jwt_auth>.freeze, ["~> 0.5"])
    s.add_development_dependency(%q<bundler>.freeze, ["> 1"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 13.0"])
    s.add_development_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_development_dependency(%q<pry-byebug>.freeze, ["~> 3.7"])
    s.add_development_dependency(%q<rails>.freeze, ["~> 6.0"])
    s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
    s.add_development_dependency(%q<rspec-rails>.freeze, ["~> 4.0"])
    s.add_development_dependency(%q<rubocop>.freeze, ["~> 0.87"])
    s.add_development_dependency(%q<rubocop-rspec>.freeze, ["~> 1.42"])
    s.add_development_dependency(%q<simplecov>.freeze, ["= 0.17"])
    s.add_development_dependency(%q<codeclimate-test-reporter>.freeze, ["~> 1.0"])
  else
    s.add_dependency(%q<devise>.freeze, ["~> 4.0"])
    s.add_dependency(%q<warden-jwt_auth>.freeze, ["~> 0.5"])
    s.add_dependency(%q<bundler>.freeze, ["> 1"])
    s.add_dependency(%q<rake>.freeze, ["~> 13.0"])
    s.add_dependency(%q<rspec>.freeze, [">= 0"])
    s.add_dependency(%q<pry-byebug>.freeze, ["~> 3.7"])
    s.add_dependency(%q<rails>.freeze, ["~> 6.0"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rspec-rails>.freeze, ["~> 4.0"])
    s.add_dependency(%q<rubocop>.freeze, ["~> 0.87"])
    s.add_dependency(%q<rubocop-rspec>.freeze, ["~> 1.42"])
    s.add_dependency(%q<simplecov>.freeze, ["= 0.17"])
    s.add_dependency(%q<codeclimate-test-reporter>.freeze, ["~> 1.0"])
  end
end
