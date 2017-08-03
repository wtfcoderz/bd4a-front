FROM	wtfcoderz/images:nodereact as build
COPY	package.json /src
RUN	npm install
COPY	. /src
RUN	npm run build

FROM	abiosoft/caddy
COPY	--from=build /src/build /srv
