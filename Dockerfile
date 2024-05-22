FROM ruby:3.2
RUN apt-get update && apt-get install -y plantuml
WORKDIR /app

COPY _themes/jekyll-theme-legumeinfo/jekyll-theme-legumeinfo.gemspec \
     _themes/jekyll-theme-legumeinfo/jekyll-theme-legumeinfo.gemspec 
COPY Gemfile* .

RUN bundle install 

ENTRYPOINT ["bundle", "exec", "jekyll", "serve"]

EXPOSE 4000
