.evn file

DB_USER=admin
DB_HOST=localhost
DB_NAME=mydatabase
DB_PASSWORD=secret
DB_PORT=5432

NEXTAUTH_SECRET=my_secret
NEXTAUTH_URL=http://localhost:3000

# Deploy application

1. Docker compose

```bash
docker compose up -d
```

2. Access Application

```
localhost:3000
```

# Run E2E Testing

1. Install dependencies

```bash
npm inistall
```

2. Run Test

```bash
npx cypress open
# or
npx cypress run
```
