FROM kthse/kth-nodejs:12.0.0

#
# Put the application into a direcctory in the root.
# This will prevent file polution, and possible overwriting of files.
#
RUN mkdir -p /application
WORKDIR /application
ENV NODE_PATH /application

COPY ["build.sh", "build.sh"]
COPY ["package.json", "package.json"]
COPY ["package-lock.json", "package-lock.json"]
COPY ["config", "config"]
COPY ["public", "public"]
COPY ["i18n", "i18n"]
COPY [".babelrc.js", ".babelrc.js"]

RUN apk add --no-cache --virtual .gyp-dependencies python make g++ bash util-linux && \
  npm run docker && \
  apk del .gyp-dependencies

COPY ["app.js", "app.js"]
COPY ["server", "server"]

EXPOSE 3000
ENV TZ=Europe/Stockholm

CMD ["node", "app.js"]
