FROM kthse/kth-nodejs:12.0.0

LABEL maintainer="KTH-Webb web-developers@kth.se"

RUN mkdir -p /npm && \
  mkdir -p /application

# We do this to avoid npm install when we're only changing code
WORKDIR /npm

COPY ["package.json", "package.json"]
COPY ["package-lock.json", "package-lock.json"]

RUN npm install --production --no-optional

# Add the code and copy over the node_modules-catalog
WORKDIR /application
RUN cp -a /npm/node_modules /application && \
  rm -rf /npm

# Copy files used by Parcel.
COPY ["config", "config"]
COPY ["public", "public"]
COPY ["i18n", "i18n"]
COPY ["package.json", "package.json"]
COPY [".babelrc.js", ".babelrc.js"]
COPY ["server", "server"]
RUN npm run docker

COPY ["app.js", "app.js"]
COPY ["server", "server"]

ENV NODE_PATH /application

EXPOSE 3000
ENV TZ=Europe/Stockholm

CMD ["node", "app.js"]
