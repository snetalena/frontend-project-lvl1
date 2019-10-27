publish:
	npm publish --dry-run

install: install-deps
	npm install

install-deps:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env

start:
	npx babel-node src/bin/brain-games.js

make lint:
	npx eslint .

