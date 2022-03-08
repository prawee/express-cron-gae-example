# Express cronjob with GAE

How to create `cronjob` with Express on Google App Engine

## Development

### Via clone

```bash
git clone https://github.com/prawee/express-gae-example.git
cd express-gae-example
yarn
```

### Running

```bash
cp env.dist .env
# update environment variable
yarn start
```

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