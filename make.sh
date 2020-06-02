#!/bin/sh
docker-compose up -d --build && docker-compose exec web npm run dev