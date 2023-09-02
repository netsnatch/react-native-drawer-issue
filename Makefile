up:
	@(docker-compose up -d)

restart:
	@(docker-compose restart)

bash:
	@(docker-compose exec node bash)

