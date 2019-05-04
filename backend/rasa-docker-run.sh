docker run \
  --rm -p 5000:5000 \
  -v $HOME/repos/web_apps/statement_extractor/rasa_model:/app/projects \
  rasa/rasa_nlu:stable-full \
  start \
    --path /app/projects \
    --max_training_processes 2 \
    --port 5000