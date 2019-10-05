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

# target: virtual -- Install virtual environment
virtual:
	pipenv shell

# target: requirements -- Install requirements.txt
requirements:
	pip install -r requirements.txt
