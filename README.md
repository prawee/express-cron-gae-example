# Express cronjob with GAE

How to create `cronjob` with Express on Google App Engine

## Deploy

### Application Task

```bash
gcloud app deploy
```

## Scheduler

```bash
gcloud app deploy cron.yaml
```

## Hook

```bash
gcloud app deploy dispatch.yaml
```