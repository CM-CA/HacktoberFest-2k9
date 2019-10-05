.PHONY: all help translate test clean update compass collect rebuild

SETTINGS={{ project_name }}.settings
TEST_SETTINGS={{ project_name }}.test_settings

# target: all -- Default target. Does nothing.
all:
	@echo "Hello $(LOGNAME), nothing to do by default"
	@echo "Try 'make help'"

# target: help -- Display callable targets.
help:
	@egrep "^# target:" [Mm]akefile

# target: install -- Install vue-cli
cli:
	npm install -g @vue/cli

# target: bootstrap --Installs Bootstrap-Vue
bootstrap:
	npm install vue bootstrap-vue bootstrap

# target: create -- Create new vue project inside a default directory or you can select your own directory
create:
	mkdir frontend && cd frontend
	vue create .

# target: server -- Run server
server:
	npm run serve
